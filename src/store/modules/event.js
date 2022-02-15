import EventService from '@/services/EventService'

export const namespaced = true

export const state = {
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 3, text: '...', done: true },
    { id: 4, text: '...', done: false }
  ],
  events: [],
  event: {},
  eventsTotal: 0
}
export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  SET_EVENTS_TOTAL(state, events) {
    state.eventsTotal = events
  }
}
export const actions = {
  createEvent({ commit, dispatch, rootState }, event) {

    // What if the action I want to call is in another module which is namespaced?
    // dispatch('moduleName/actionToCall', null, { root: true })

    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        console.log('total events are:', response.headers['x-total-count'])
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchEvent({ commit, getters }, id) {
    let event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}
export const getters = {
  activeTodosCount: (state, getters) => {
    // Pass a getter into another getter

    // return state.todos.filter(todo => !todo.done)
    return state.todos.length - getters.doneTodos.length
  },
  getEventById: state => id => {
    // return a function using a parameter
    return state.events.find(event => event.id === id)
  }
}

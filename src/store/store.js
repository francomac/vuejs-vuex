import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
  //   todos: [
  //     { id: 1, text: '...', done: true },
  //     { id: 2, text: '...', done: false },
  //     { id: 3, text: '...', done: true },
  //     { id: 4, text: '...', done: false }
  //   ],
  //   events: [],
  //   event: {},
  //   eventsTotal: 0
  // },
  // mutations: {
  //   ADD_EVENT(state, event) {
  //     state.events.push(event)
  //   },
  //   SET_EVENTS(state, events) {
  //     state.events = events
  //   },
  //   SET_EVENT(state, event) {
  //     state.event = event
  //   },
  //   SET_EVENTS_TOTAL(state, events) {
  //     state.eventsTotal = events
  //   }
  // },
  // actions: {
  //   createEvent({ commit }, event) {
  //     return EventService.postEvent(event).then(() => {
  //       commit('ADD_EVENT', event)
  //     })
  //   },
  //   fetchEvents({ commit }, { perPage, page }) {
  //     EventService.getEvents(perPage, page)
  //       .then(response => {
  //         console.log('total events are:', response.headers['x-total-count'])
  //         commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
  //         commit('SET_EVENTS', response.data)
  //       })
  //       .catch(error => {
  //         console.log('There was an error:', error.response)
  //       })
  //   },
  //   fetchEvent({ commit, getters }, id) {
  //     let event = getters.getEventById(id)

  //     if (event) {
  //       commit('SET_EVENT', event)
  //     } else {
  //       EventService.getEvent(id)
  //         .then(response => {
  //           commit('SET_EVENT', response.data)
  //         })
  //         .catch(error => {
  //           console.log('There was an error:', error.response)
  //         })
  //     }
  //   }
  },
  // getters: {
  //   catLength: state => {
  //     return state.categories.length
  //   },
  //   doneTodos: state => {
  //     return state.todos.filter(todo => todo.done)
  //   },
  //   activeTodosCount: (state, getters) => {
  //     // Pass a getter into another getter

  //     // return state.todos.filter(todo => !todo.done)
  //     return state.todos.length - getters.doneTodos.length
  //   },
  //   getEventById: state => id => {
  //     // return a function using a parameter
  //     return state.events.find(event => event.id === id)
  //   }
  // }
})

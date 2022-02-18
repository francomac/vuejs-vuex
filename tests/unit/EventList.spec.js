import Vuex from 'vuex'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import EventList from '@/views/EventList.vue'
import EventCard from '@/components/EventCard.vue'
import BaseIcon from '@/components/BaseIcon'

import { events as mockEvents } from '../../db.json'
import flushPromises from 'flush-promises'

const localVueWithVuex = createLocalVue()
localVueWithVuex.use(Vuex)

function mountEventList() {
  let eventActions = {
    fetchEvents: jest.fn()
  }

  let user = {
    namespaced: true,
    state: {
      user: {
        name: 'franco'
      }
    }
  }
  let event = {
    namespaced: true,
    state: {
      events: mockEvents
    },
    actions: eventActions
  }

  let storeInstance = new Vuex.Store({
    modules: {
      user,
      event
    }
  })

  return mount(EventList, {
    localVue: localVueWithVuex,
    store: storeInstance,
    stubs: {
      RouterLink: RouterLinkStub,
      EventCard,
      BaseIcon
    },
    mocks: {
      $route: { query: { page: 2 } }
    }
  })
}

let wrapper

beforeEach(() => {
  jest.resetAllMocks()
  wrapper = mountEventList()
})

describe('EventList', () => {
  it('should render the events list component', () => {
    
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('page title', () => {
    it('should displays a specific text', () => {
      const name = 'franco'
      const title = wrapper.find('[data-testid=eventListTitle]')

      expect(title.exists()).toBeTruthy()

      expect(title.text()).toEqual(`Events for ${name}`)
    })
  })

  describe('events', () => {
    it('are rendered in a list', async () => {

      await flushPromises()

      console.log(wrapper.vm.$store.state.user.user.name)
      console.log(wrapper.vm.$store.state.event.events[0].title)

      expect(wrapper.findAllComponents(EventCard).length).toBe(
        mockEvents.length
      )
    })
  })
})

import Vuex from 'vuex'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import EventList from '@/views/EventList.vue'

beforeEach(() => {
  const localVue = createLocalVue()

  localVue.use(Vuex)
  const mockStore = new Vuex.Store({
    modules: {
      user: {
        namespaced: true,
        state: {
          user: { name: 'alice' }
        }
      },
      event: {
        namespaced: true,
        events: {
          id: 1,
          title: 'Beach Cleanup',
          date: 'Aug 28 2018',
          time: '10:00',
          location: 'Daytona Beach',
          description: "Let's clean up this beach.",
          organizer: 'Adam Jahr',
          category: 'sustainability',
          attendees: [
            {
              id: 'abc123',
              name: 'Adam Jahr'
            },
            {
              id: 'def456',
              name: 'Gregg Pollack'
            },
            {
              id: 'ghi789',
              name: 'Beth Swanson'
            },
            {
              id: 'jkl101',
              name: 'Mary Gordon'
            }
          ]
        },
        actions: {
          fetchEvents: jest.fn()
        }
      }
    }
  })

  const myEventCard = {
    template: '<div />',
    methods: {
      someMethod() {}
    }
  }

  let wrapper = mount(EventList, {
    localVue,
    stubs: {
      RouterLink: RouterLinkStub,
      EventCard: myEventCard
    },
    mocks: {
      $store: mockStore,
      $route: { query: { page: 2 } }
    }
  })
})

describe('EventList', () => {
  it('should displays a specific title', () => {})
})

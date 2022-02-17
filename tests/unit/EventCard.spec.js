import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const event = {
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
    }
    const MyStub = {
      template: '<div />',
      methods: {
        someMethod() {}
      }
    }

    const wrapper = mount(EventCard, {
      propsData: {
        event
      },
      stubs: {
        'BaseIcon': MyStub
      }
    })

    const eventDate = wrapper.find('[data-testid=eventDate]')
    expect(eventDate.text()).toEqual('@10:00 on Aug 28 2018')

    const eventTitle = wrapper.find('[data-testid=eventTitle]')
    expect(eventTitle.text()).toEqual('Beach Cleanup')

    const eventAttendees = wrapper.find('[data-testid=eventAttendees]')
    expect(eventAttendees.exists()).toBeTruthy()
  })
})

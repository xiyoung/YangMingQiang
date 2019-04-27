import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav'

describe('Nav.vue', () => {
  const navLists = [{
    title: 'DASHBOARD'
  },
  {
    title: 'MY CRUISE'
  },
  {
    title: 'AGENTS'
  },
  {
    title: 'HELP'
  }
  ]
  const wrapper = mount(Nav, {
    propsData: {
      navLists
    }
  })
  it('renders li for each item in props.items', () => {
    expect(wrapper.findAll('li')).toHaveLength(navLists.length)
  })

  it('button click should update the activedIndex', done => {
    expect(wrapper.vm.activedIndex).toBe(0)
    wrapper.findAll('li').at(2).trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.activedIndex).toBe(2)
      done()
    })
  })
})

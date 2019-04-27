import { mount } from '@vue/test-utils'
import ChildNav from '@/components/ChildNav'

describe('ChildNav.vue', () => {
  const navLists = [{
    title: 'Agents'
  },
  {
    title: 'All'
  },
  {
    title: 'Physical'
  },
  {
    title: 'Virtual'
  }
  ]
  const wrapper = mount(ChildNav, {
    propsData: {
      navLists
    }
  })
  it('renders li for each item in props.items', () => {
    expect(wrapper.findAll('li')).toHaveLength(navLists.length)
  })

  it('renders default background if not passed a prop', () => {
    const defaulActivedBgColor = 'rgb(221, 221, 221)' // #ddd
    const attrs = wrapper.findAll('li').at(1).attributes('style')
    const style = attrs.split(';')
    const backgroundColor = style[0].split(':')[1].trim()
    expect(backgroundColor).toBe(defaulActivedBgColor)
  })

  it('button click should update the activedIndex', done => {
    expect(wrapper.vm.activedIndex).toBe(1)
    wrapper.findAll('li').at(2).trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.activedIndex).toBe(2)
      done()
    })
  })
})

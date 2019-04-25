import { mount } from '@vue/test-utils'
import ChildNav from '@/components/ChildNav'

describe('ChildNav.vue', () => {
  it('reactived index', done => {
    const navLists = [
      {title: 'DASHBOARD'},
      {title: 'MY CRUISE'},
      {title: 'AGENTS'},
      {title: 'HELP'}
    ]
    const wrapper = mount(ChildNav, {
      propsData: {
        navLists
      }
    })
    expect(wrapper.vm.activedIndex).toBe(1)
    wrapper.findAll('li').at(2).trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.activedIndex).toBe(2)
      done()
    })
  })
})

import { mount } from '@vue/test-utils'
import ServerDetail from '@/components/ServerDetail'

describe('ServerDetail.vue', () => {
  let wrapper
  const propsData = {
    index: 0,
    domain: 'bgstdmngbgr02.thoughtworks.com',
    state: 'idle',
    ip: '192.168.1.2',
    directory: '/var/lib/cruise-agent',
    isDeny: true,
    resources: ['ubuntu', 'firefox3', 'core-due', 'mysql']
  }
  beforeEach(() => {
    wrapper = mount(ServerDetail, {
      propsData
    })
    wrapper.setData({
      showAddResourceDialog: false
    })
  })
  it('renders props', () => {
    expect(wrapper.classes('server_detail_wrap_deny')).toBe(false)
    expect(wrapper.find('.domain').text()).toEqual(propsData.domain)
    expect(wrapper.find('.state').text()).toEqual(propsData.state)
    expect(wrapper.find('.ip').text()).toEqual(propsData.ip)
    expect(wrapper.find('.directory').text()).toEqual(propsData.directory)
    expect(wrapper.findAll('li')).toHaveLength(propsData.resources.length)
  })
  it('add button click should update the showAddResourceDialog', done => {
    wrapper.setData({
      showAddResourceDialog: false
    })
    expect(wrapper.vm.showAddResourceDialog).toBe(false)
    wrapper.find('.add-action-text').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showAddResourceDialog).toBe(true)
      done()
    })
  })
  it('delete button click should emit handleDeleteResource', done => {
    wrapper.find('.delete-icon-wrap').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted('handleDeleteResource')).toBeTruthy()
      done()
    })
  })
})

import { mount } from '@vue/test-utils'
import AddResource from '@/components/AddResource.vue'

describe('AddResource.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(AddResource, {
      propsData: {
        index: 0
      }
    })
  })
  it('close button click should emit update:isShow', done => {
    wrapper.find('.btn-close').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted('update:isShow')).toBeTruthy()
      done()
    })
  })
  it('add button click should emit update:isShow and handleAddResource', done => {
    wrapper.setData({
      addedResources: 'mysql, vue'
    })
    wrapper.find('.btn-add').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emittedByOrder().map(e => e.args)).toEqual([[{'addedResources': ['mysql', 'vue'], 'index': 0}], [false]])
      expect(wrapper.emittedByOrder().map(e => e.name)).toEqual(['handleAddResource', 'update:isShow'])
      done()
    })
  })
})

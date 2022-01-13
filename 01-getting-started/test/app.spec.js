import { mount } from '@vue/test-utils'
import MessageComponent from '../src/MessageComponent.vue'

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world'
    }
  })
  
  expect(wrapper.text()).toContain('Hello world')
})

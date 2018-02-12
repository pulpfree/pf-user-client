/* eslint no-undef: "off" */
// import React from 'react'
import { mount } from 'enzyme'

import renderTextField from '../components/TextField'

describe('TextField', () => {
  let props
  let wrapper
  let mountedC
  const textFieldC = () => {
    if (!mountedC) {
      mountedC = mount(
        renderTextField(props)
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined,
    props = {
      input: {
        id: 'textField',
      },
      defaultValue: 'foo field',
      meta: { touched: true, error: 'Required'},
    }
  })

  it('display error message', () => {
    wrapper = textFieldC()
    // expect(wrapper.find('.md-text-field-message').exists()).toEqual(true)
    const textMsgBlock = wrapper.find('.md-text-field-message')
    expect(textMsgBlock).toExist
    expect(textMsgBlock.text()).toEqual('Required')
  })

  it('always renders an input element', () => {
    wrapper = textFieldC()
    expect(wrapper.find('input').length).toBeGreaterThan(0)
  })
})

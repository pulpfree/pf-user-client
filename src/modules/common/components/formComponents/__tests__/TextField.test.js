/* eslint no-undef: "off" */
// import React from 'react'
import { mount } from 'enzyme'

import renderTextField from '../TextField'

describe('TextField', () => {
  let props
  let subject
  // let subject, defaultValue, submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit, meta
  // let mountedC
  /*const textFieldC = () => {
    if (!mountedC) {
      // console.log('props:', meta)
      mountedC = mount(
        renderTextField()
      )
    }
    return mountedC
  }*/

  beforeEach(() => {
    props = {
      // mountedC = undefined
      input: {
        id: 'textField',
      },
      // submitting: false,
      // touched: true,
      defaultValue: 'foo field',
      // error = null
      // reset = sinon.spy()
      // onSaveResponse = Promise.resolve()
      // handleSubmit = fn => fn
      meta: { touched: true, error: 'Required'},
    }
  })

  it('always renders a component', () => {
    // console.log('textField:', meta)
    const element = renderTextField(props)
    // console.log('element:', element)
    subject = mount(element)
    // console.log('textField:', subject.find('value'))
    expect(subject.find('input').length).toBeGreaterThan(0)
  })
})
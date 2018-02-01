/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import ForgotPassword from '../components/ForgotPassword'

describe('ForgotPassword', () => {
  let props
  let mountedC
  const forgotC = () => {
    if (!mountedC) {
      mountedC = mount(
        <ForgotPassword {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(forgotC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(forgotC()).toMatchSnapshot()
  })

})
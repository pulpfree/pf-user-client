/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import ResetPassword from '../components/ResetPassword'

describe('ResetPassword', () => {
  let props
  let mountedC
  const resetC = () => {
    if (!mountedC) {
      mountedC = mount(
        <ResetPassword {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(resetC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(resetC()).toMatchSnapshot()
  })

})
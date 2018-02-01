/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import UserCreate from '../components/UserCreate'

describe('UserCreate', () => {
  let props
  let mountedC
  const userCreateC = () => {
    if (!mountedC) {
      mountedC = mount(
        <UserCreate {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(userCreateC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(userCreateC()).toMatchSnapshot()
  })

})
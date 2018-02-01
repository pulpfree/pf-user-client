/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import UserUpdate from '../components/UserUpdate'

describe('UserUpdate', () => {
  let props
  let mountedC
  const userUpdateC = () => {
    if (!mountedC) {
      mountedC = mount(
        <UserUpdate {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(userUpdateC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(userUpdateC()).toMatchSnapshot()
  })

})
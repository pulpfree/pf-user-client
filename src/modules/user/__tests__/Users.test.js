/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import Users from '../components/Users'

describe('Users', () => {
  let props
  let mountedC
  const usersC = () => {
    if (!mountedC) {
      mountedC = mount(
        <Users {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(usersC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(usersC()).toMatchSnapshot()
  })

})
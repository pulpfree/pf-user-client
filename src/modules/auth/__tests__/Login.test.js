/* eslint no-undef: "off" */
import React from 'react'

import { shallow } from 'enzyme'

import Login from '../components/Login'

describe('Login', () => {
  let mountedC
  const loginC = () => {
    if (!mountedC) {
      mountedC = shallow(<Login />)
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(loginC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(loginC()).toMatchSnapshot()
  })

})
/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import NoMatch from '../components/NoMatch'

describe('NoMatch', () => {
  let props
  let mountedC
  const noMatchC = () => {
    if (!mountedC) {
      mountedC = mount(
        <NoMatch {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    props = {
      location: {pathname: '/foo'},
    }
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(noMatchC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(noMatchC()).toMatchSnapshot()
  })

})
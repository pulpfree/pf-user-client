/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import Sites from '../components/Sites'

describe('Sites', () => {
  let props
  let mountedC
  const sitesC = () => {
    if (!mountedC) {
      mountedC = mount(
        <Sites {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(sitesC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(sitesC()).toMatchSnapshot()
  })

})
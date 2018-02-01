/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import SiteCreate from '../components/SiteCreate'

describe('SiteCreate', () => {
  let props
  let mountedC
  const siteCreateC = () => {
    if (!mountedC) {
      mountedC = mount(
        <SiteCreate {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(siteCreateC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(siteCreateC()).toMatchSnapshot()
  })

})
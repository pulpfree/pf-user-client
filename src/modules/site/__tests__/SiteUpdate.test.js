/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'

import SiteUpdate from '../components/SiteUpdate'

describe('SiteUpdate', () => {
  let props
  let mountedC
  const siteUpdateC = () => {
    if (!mountedC) {
      mountedC = mount(
        <SiteUpdate {...props} />
      )
    }
    return mountedC
  }

  beforeEach(() => {
    mountedC = undefined
  })

  it('always renders a component', () => {
    expect(siteUpdateC().find('div').length).toBeGreaterThan(0)
  })

  it('matches snapshot', () => {
    expect(siteUpdateC()).toMatchSnapshot()
  })

})
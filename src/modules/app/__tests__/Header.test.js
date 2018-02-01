/* eslint no-undef: "off" */
import React from 'react'

import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Header from '../components/Header'

describe('Header', () => {
  let props
  let mountedHeader
  const headerC = () => {
    // console.log('props in headerC:', props)
    if (!mountedHeader) {
      mountedHeader = mount(
        <MemoryRouter><Header {...props} /></MemoryRouter>
      )
    }
    return mountedHeader
  }

  beforeEach(() => {
    props = {
      props: {location: {pathname: '/admin'}},
    }
    mountedHeader = undefined
  })

  it('always renders a header', () => {
    expect(headerC().find('header').length).toBeGreaterThan(0)
  })

  // note: this causes tests to overload as
  // useing MemoryRouter with MatchSnapshot appears to be issue
  /*
  it('matches snapshot', () => {
    expect(headerC()).toMatchSnapshot()
    // expect(noMatchC()).toMatchSnapshot()
  })*/

})

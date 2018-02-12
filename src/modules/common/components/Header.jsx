import React from 'react'
// import PropTypes from 'prop-types'

import { Toolbar } from 'react-md'

import logo from '../../../assets/images/logo.svg'

const Header = () => {
  // const { location } = props
  return (
    <header className="app-header">
      <Toolbar
        colored
      >
        <img
          alt="logo"
          className="app-logo"
          src={logo}
        />
      </Toolbar>
    </header>
  )
}
Header.propTypes = {
  // location: PropTypes.object,
  // props:    PropTypes.object.isRequired,
}

export default Header
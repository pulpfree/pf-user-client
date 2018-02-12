import React from 'react'
import PropTypes from 'prop-types'

// import { Button, Toolbar } from 'react-md'
import { Toolbar } from 'react-md'
import { NavLink } from 'react-router-dom'

import logo from '../../../assets/images/logo.svg'

const links = [
  {
    label: 'dashboard',
    path: '/admin',
  },
  {
    label: 'sites',
    path: '/admin/sites',
  },
  {
    label: 'users',
    path:  '/admin/users',
  },
]

const NavLinks = ({location}) => {
  // console.log('location in NavLinks:', location)
  const ls = links.map(l => {
    return (
      <NavLink
        activeClassName="menu-link-active"
        className="menu-link"
        isActive={() => l.path === location.pathname}
        key={l.path}
        to={l.path}
      >{l.label}</NavLink>
    )
  })
  return <nav className="app-nav">{ls}</nav>
}
NavLinks.propTypes = {
  location: PropTypes.object,
}

// const Login = ({history}) => {
//   return (
//     <Button
//       flat
//       label="Login"
//       onClick={() => history.push('/login')}
//     />
//   )
// }

// const Header = ({ history, location, match }) => {
const Header = ({ props }) => {
  const { location } = props
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
      <NavLinks location={location} />
    </header>
  )
}
Header.propTypes = {
  location: PropTypes.object,
  props:    PropTypes.object.isRequired,
}

export default Header

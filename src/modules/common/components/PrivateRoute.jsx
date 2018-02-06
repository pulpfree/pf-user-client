import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={ props => (  // eslint-disable-line
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
)

PrivateRoute.propTypes = {
  component:        PropTypes.func,
  isAuthenticated:  PropTypes.bool.isRequired,
  location:         PropTypes.object,
}

export default PrivateRoute
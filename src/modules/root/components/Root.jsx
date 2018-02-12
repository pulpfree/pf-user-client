import React from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../../app/components/App'
import ForgotPassword from '../../password/components/ForgotPassword'
import ResetPassword from '../../password/components/ResetPassword'
import NoMatch from '../../app/components/NoMatch'
import Login from '../../auth/components/Login'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          component={App}
          path="/admin"
        />
        <Route
          component={ForgotPassword}
          path="/forgot-password"
        />
        <Route
          component={ResetPassword}
          path="/reset-password"
        />
        <Route
          component={Login}
          path="/login"
        />
        <Route
          path="/"
          render={() => (
            <Redirect to="/admin" />
          )}
        />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root

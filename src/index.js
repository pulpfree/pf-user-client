import React from 'react'
import ReactDOM from 'react-dom'

// import createHistory from 'history/createBrowserHistory'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.sass'

import App from './modules/app/components/App'
import ForgotPassword from './modules/password/components/ForgotPassword'
import ResetPassword from './modules/password/components/ResetPassword'
import NoMatch from './modules/app/components/NoMatch'

import registerServiceWorker from './registerServiceWorker'

// const history = createHistory()

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
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
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()

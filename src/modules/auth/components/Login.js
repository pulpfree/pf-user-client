import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Field, reduxForm } from 'redux-form'
import { Paper } from 'react-md'

class Login extends Component {

  _onHandleSubmit(values) {
    console.log('values in _onHandleSubmit:', values)
  }

  render() {

    return (
      <div>Login Component
        <Paper>

        </Paper>
      </div>
    )
  }
}

Login = reduxForm({ // eslint-disable-line no-class-assign
  form:           'login-form',
  // validate,
})(Login)

export default Login
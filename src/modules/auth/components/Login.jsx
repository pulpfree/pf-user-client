import React, { Component } from 'react'


import g from 'glamorous'
import {
  Paper,
  Toolbar,
} from 'react-md'

import Header from '../../common/components/Header'
import LoginForm from '../containers/LoginForm'

class Login extends Component {

  render() {

    return (
      <div>
        <Header />
        <g.Div
          className="md-cell md-cell--6"
          margin={'auto'}
          marginTop={'30px'}
        >
          <Paper>
            <Toolbar
              colored
              title="Enter Login Credentials"
            />
            <LoginForm />
          </Paper>
        </g.Div>
      </div>
    )
  }
}

export default Login

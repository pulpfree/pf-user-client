import React, { Component } from 'react'

import {  Route } from 'react-router-dom'

import Sites from '../../site/components/Sites'
import Users from '../../user/components/Users'

import Header from './Header'
import './app.sass'

class App extends Component {
  render() {
    // console.log('props in App:', this.props)
    return (
      <div className="app">
        <Header props={this.props} />
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route
          component={Sites}
          path="/admin/sites"
        />
        <Route
          component={Users}
          path="/admin/users"
        />
      </div>
    )
  }
}

export default App

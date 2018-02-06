import React, { Component } from 'react'

import { Redirect, Route } from 'react-router-dom'

import './app.sass'
import Header from './Header'
import Sites from '../../site/components/Sites'
import Users from '../../user/components/Users'

class App extends Component {


  render() {

    let isAuthed = true

    // console.log('location:', this.props.location)
    // console.log('split:', this.props.location.pathname.split('/'))
    // const pathPrts = this.props.location.pathname.split('/')

    if (!isAuthed) {
      // console.log('isAuthed:', isAuthed)
    // } else {
      // console.log('isAuthed:', isAuthed)
      return <Redirect to={'/login'} />
    }

    return (
      <div className="app">
        <Header props={this.props} />
        {/*<p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
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

// import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import LoginFormComponent from '../components/LoginForm'


let LoginForm = reduxForm({ // eslint-disable-line no-class-assign
  form:           'login-form',
  // validate,
})(LoginFormComponent)

const mapStateToProps = null
const mapDispatchToProps = dispatch => {
  return {
    // This is just an example of an action that your submit handler might
    // fire. You can see I'm dispatching an action, just for example sake
    // to make it more realistic, but there's not even a reducer for the
    // action.
    onSave: contactFormValues => {
      console.log('Now running onSave action')
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('Now dispatching action with type FORM_SUBMIT')
          dispatch({ type: 'FORM_SUBMIT', payload: contactFormValues })
          resolve()
        }, 1000)
      })
    },
  }
}

// NOTE: not clear if this is entirely necessary
// see: https://github.com/tylercollier/redux-form-test/blob/master/app/ContactFormContainer.js#L33 
// for explanation
const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps)

LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LoginForm)

export default LoginForm
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import g from 'glamorous'
import {
  Button,
} from 'react-md'
import { Field, SubmissionError } from 'redux-form'
import RenderTextField from '../../form/components/TextField'
import {
  email,
  password,
} from '../../form/utils'


class LoginForm extends Component {

  constructor(props) {
    super(props)
    this._onHandleSubmit = this._onHandleSubmit.bind(this)
  }

  _onHandleSubmit(values) {
    return this.props.onSave(values).then(response => {
      this.props.reset()
      return response
    }).catch(error => {
      throw new SubmissionError(error)
    })
  }

  render() {

    const {
      handleSubmit,
      pristine,
      submitting,
    } = this.props

    return (
      <g.Form
        onSubmit={handleSubmit(this._onHandleSubmit)}
        padding={'0 30px 30px'}
      >
        <Field
          autoFocus
          className="md-cell md-cell--12 md-cell--bottom form-field"
          component={RenderTextField}
          id="email"
          label="Email"
          name="email"
          placeholder="Enter email address"
          required
          type="email"
          validate={email}
        />
        <Field
          className="md-cell md-cell--12 md-cell--bottom form-field"
          component={RenderTextField}
          id="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          required
          style={{height: '90px'}}
          type="password"
          validate={password}
        />
        <Button
          className="md-cell md-cell--12 md-cell--bottom"
          disabled={pristine || submitting}
          id="submit"
          raised
          secondary
          style={{marginTop: '20px'}}
          type="submit"
        >
          {submitting ? 'Standby...' : 'Submit'}
        </Button>
      </g.Form>
    )
  }
}
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSave:       PropTypes.func.isRequired,
  pristine:     PropTypes.bool.isRequired,
  reset:        PropTypes.func.isRequired,
  submitting:   PropTypes.bool.isRequired,
}

export default LoginForm

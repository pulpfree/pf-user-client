import React from 'react'
import PropTypes from 'prop-types'

import { TextField } from 'react-md'

const renderTextField = ({ defaultValue, input, meta: { touched, error }, ...others }) => (
  <TextField
    {...input}
    {...others}
    defaultValue={defaultValue}
    error={touched && !!error}
    errorText={error}
  />
)

renderTextField.propTypes = {
  defaultValue:  PropTypes.string,
  input:  PropTypes.object,
  meta:   PropTypes.object,
}

export default renderTextField
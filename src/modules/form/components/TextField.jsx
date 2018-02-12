import React from 'react'
import PropTypes from 'prop-types'

import { TextField } from 'react-md'

const RenderTextField = ({ defaultValue, input, meta: { touched, error }, ...others }) => (
  <TextField
    {...input}
    {...others}
    defaultValue={defaultValue}
    error={touched && !!error}
    errorText={error}
  />
)

RenderTextField.propTypes = {
  defaultValue:  PropTypes.string,
  input:  PropTypes.object,
  meta:   PropTypes.object,
}

export default RenderTextField
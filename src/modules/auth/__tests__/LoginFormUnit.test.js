/* eslint no-undef: "off" */
import React from 'react'

import { shallow } from 'enzyme'
import { SubmissionError } from 'redux-form'

import LoginForm from '../components/LoginForm'

describe('LoginForm', () => {
  let mountedC
  let pristine, submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit
  let wrapper

  const buildForm = () => {
    onSave = jest.fn().mockReturnValue(onSaveResponse)
    const props = {
      onSave,
      submitting,
      pristine,
      // The real redux form has many properties for each field,
      // including onChange and onBlur handlers. We only need to provide
      // the ones that will change the rendered output.
      fields: {
        email: {
          value: 'me@there.co',
          touched,
          error,
        },
      },
      handleSubmit,
      reset,
    }
    if (!mountedC) {
      mountedC = shallow(<LoginForm {...props} />)
    }
    return mountedC
  }

  beforeEach(() => {
    error = null
    handleSubmit = fn => fn
    mountedC = undefined
    onSaveResponse = Promise.resolve()
    pristine = false
    reset = jest.fn()
    submitting = false
    touched = false
  })

  it('always renders fields', () => {
    wrapper = buildForm()
    expect(wrapper.find('Field').length).toBe(2)
    expect(wrapper.find('Field[id="email"]').length).toEqual(1)
    expect(wrapper.find('Field[id="password"]').length).toEqual(1)
  })

  it('submits successfully', () => {
    wrapper = buildForm()
    wrapper.simulate('submit')

    return onSaveResponse.then(() => {
      expect(reset.mock.calls.length).toEqual(1)
    })
  })

  it('matches snapshot', () => {
    expect(buildForm()).toMatchSnapshot()
  })

  describe('Login form errors', () => {

    beforeEach(() => {
      onSaveResponse = Promise.reject('some rejection')
    })

    it('throws a SubmissionError on error in the form submit handler', () => {
      let promiseReturnedFromFormHandler
      handleSubmit = fn => {
        return function() {
          promiseReturnedFromFormHandler = fn(arguments)
        }
      }
      wrapper = buildForm()
      wrapper.simulate('submit')
      expect(onSave.mock.calls.length).toEqual(1)
      return promiseReturnedFromFormHandler.then(() => {
        throw new Error('Submission error should have been checked but was not')
      }).catch(error => {
        expect(error).toBeInstanceOf(SubmissionError)
      })
    })

  })

})

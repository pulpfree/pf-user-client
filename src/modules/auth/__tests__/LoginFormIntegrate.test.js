/* eslint no-undef: "off" */
import React from 'react'

import LoginForm from '../containers/LoginForm'

import { mount } from 'enzyme'

import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

describe('LoginFormContainer', () => {
  let store
  let onSave
  let wrapper

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }))
    onSave = jest.fn().mockReturnValue(Promise.resolve())
    const props = {
      onSave,
    }
    // With redux-form v5, we could do <LoginForm store={store}/>.
    // However, with redux-form v6, the Field component we use is itself
    // connected to the redux store. Therefore, we must put the store into
    // context. To do that, we use <Provider/>.
    wrapper = mount(
      <Provider store={store}>
        <LoginForm {...props}/>
      </Provider>
    )
  })

  it('shows help text with invalid email address', () => {
    const emailInput = wrapper.find('input').first()
    emailInput.simulate('change', { target: { value: 'na' } })
    emailInput.simulate('blur')
    expect(wrapper.find('.md-text-field-message').first().text()).toEqual('Invalid email address')
  })

  it('shows correct submit label', () => {
    expect(wrapper.find('button[type="submit"]').text()).toEqual('Submit')
    wrapper.simulate('submit')
    expect(wrapper.find('button[type="submit"]').text()).toEqual('Standby...')
  })

})

import * as authActions from './authActions'
import { UserAuth } from '../authUtils'
// import Immutable from 'immutable'
import { Map } from 'immutable'

export const userState = Map({
  domainID: null,
  email: null,
  fullName: null,
  isAuthenticated: false,
  name: {
    first: null,
    last: null,
  },
  userID: null,
})

export function auth (state = userState, action) {
  switch (action.type) {

  case authActions.AUTH_LOGIN: {
    const { params } = action
    const u = {
      domainID:         params.domainID,
      email:            params.email,
      fullName:         `${params.contact.first} ${params.contact.last}`,
      isAuthenticated:  true,
      name:             params.contact,
      token:            params.token,
      userID:           params.id,
    }
    return userState.merge(u)
  }

  case authActions.AUTH_SET_USER: // Reseting a user from userState
    action.params.isAuthenticated = true
    return userState.merge(action.params)

  case authActions.AUTH_LOGOUT:
    UserAuth.clearUser()
    return userState

  case authActions.IS_AUTHENTICATED: {
    return userState.isAuthenticated
  }

  case authActions.AUTH_VAL_USER:
    // console.log('action in AUTH_VAL_USER:', action)
    // console.log('token in AUTH_VAL_USER:', UserAuth.getToken())
    // console.log('user in AUTH_VAL_USER:', UserAuth.getUser())
    // console.log('config:', config)
    return state

  default:
    return state
  }
}

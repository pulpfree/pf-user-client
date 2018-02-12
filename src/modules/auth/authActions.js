import { action } from '../../utils/action'

// ACTIONS ----------------------------------------------------------------- //
export const AUTH_LOGIN       = 'AUTH_LOGIN'
export const AUTH_LOGOUT      = 'AUTH_LOGOUT'
export const AUTH_SET_USER    = 'AUTH_SET_USER'
export const AUTH_VAL_USER    = 'AUTH_VAL_USER'
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'


// ACTION CREATORS --------------------------------------------------------- //
export const loginUser = (params) => action(AUTH_LOGIN, {params})
export const setUser = (params)   => action(AUTH_SET_USER, {params})
export const logoutUser = ()      => action(AUTH_LOGOUT)
export const validateUser = ()    => action(AUTH_VAL_USER)
export const isAuthenticated = () => action(IS_AUTHENTICATED)
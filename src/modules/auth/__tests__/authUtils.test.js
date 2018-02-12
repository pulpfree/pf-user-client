/* eslint no-undef: "off" */

import { config } from '../../../config/config'
import { Auth, UserAuth } from '../authUtils'

Object.defineProperty(window, 'localStorage', {
  value: storageMock(),
})

function storageMock() {
  let storage = {}

  return {
    setItem(key, value) {
      storage[key] = value || ''
    },
    getItem(key) {
      return key in storage ? storage[key] : null
    },
    removeItem(key) {
      delete storage[key]
    },
    get length() {
      return Object.keys(storage).length
    },
    key(i) {
      let keys = Object.keys(storage)
      return keys[i] || null
    },
  }
}

describe('UserAuth', () => {
  let user = {
    contact: {
      first:  'Test',
      last:   'Dummy',
    },
    domainID: config.DOMAIN_ID,
    email:    'testuser@example.com',
    fullName: 'Test User',
    token:    'zz-user-token',
    userID:   'abc123',
  }

  beforeEach(() => {
    UserAuth.setVals(user)
  })

  it('stores accurately in localStorage', () => {
    const LSUser = JSON.parse(window.localStorage.getItem(`${config.LOCAL_STORAGE_PREFIX}user`))
    expect(UserAuth.getUser()).toEqual(LSUser)
  })

  it('authenticates user', () => {
    const token = UserAuth.getToken()
    expect(token).toBeDefined()
    Auth.authenticate()
    expect(Auth.isAuthenticated).toBeTruthy()

    UserAuth.clearToken()
    Auth.authenticate()
    expect(Auth.isAuthenticated).toBeFalsy()
  })

  it('clears user', () => {
    UserAuth.clearUser()
    expect(UserAuth.getUser()).toBeNull()
  })

})

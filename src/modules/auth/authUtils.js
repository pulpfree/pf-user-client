import { config } from '../../config/config'

const strgPrfx = config.LOCAL_STORAGE_PREFIX

export const UserAuth = {
  getLS() {
    return window.localStorage
  },
  setVals(user) {
    let re = {
      email:      user.email,
      domainID:   config.DOMAIN_ID,
      fullName:   `${user.contact.first} ${user.contact.last}`,
      name:       user.contact,
      userID:     user.id,
    }
    this.getLS().setItem(`${strgPrfx}token`, user.token)
    this.getLS().setItem(`${strgPrfx}user`, JSON.stringify(re))
  },
  clearToken() {
    this.getLS().removeItem(`${strgPrfx}token`)
  },
  clearUser() {
    this.getLS().removeItem(`${strgPrfx}token`)
    this.getLS().removeItem(`${strgPrfx}user`)
  },
  getToken() {
    return this.getLS().getItem(`${strgPrfx}token`) || null
  },
  getUser() {
    return JSON.parse(this.getLS().getItem(`${strgPrfx}user`))
  },
}

export const Auth = {
  isAuthenticated: false,
  authenticate() {
    if (null === UserAuth.getToken()) {
      this.isAuthenticated = false
    } else {
      this.isAuthenticated = true
    }
  },
}

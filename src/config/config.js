// const localhostIP = '10.0.1.9'
const localhostIP = '127.0.0.1'
const storagePrefix = 'pf-user:'

const conf = {
  development: {
    BASE_URL: `http://${localhostIP}:3120/graphql`,
    DOMAIN_ID: 'local.pf-useradmin',
    LOCAL_STORAGE_PREFIX: storagePrefix,
  },
  test: {
    BASE_URL: `http://${localhostIP}:3120/graphql`,
    DOMAIN_ID: 'local.pf-useradmin',
    LOCAL_STORAGE_PREFIX: storagePrefix,
  },
  production: {
    BASE_URL: '/graphql',
    DOMAIN_ID: 'co.pulpfree.useradmin',
    LOCAL_STORAGE_PREFIX: storagePrefix,
  },
}

export const config = conf[process.env.NODE_ENV]

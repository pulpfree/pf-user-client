// =========================== Utilities =========================== //

export const required = value => (value ? undefined : 'Field Required')

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
)

export const password = value => (
  value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
    ? 'Invalid password'
    : undefined
)

export const normalizePhone = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return `(${onlyNums})`
    }
    if (onlyNums.length === 6) {
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}-`
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 6) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
}

export const normalizeUCFirst = value => {
  if (!value) {
    return value
  }
  const pieces = value.split(' ')
  for ( let i = 0; i < pieces.length; i++ ) {
    const j = pieces[i].charAt(0).toUpperCase()
    pieces[i] = j + pieces[i].substr(1).toLowerCase()
  }
  return pieces.join(' ')
}

export const normalizeUpper = value => value && value.toUpperCase()
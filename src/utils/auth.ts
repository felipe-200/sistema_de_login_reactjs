import jwt from 'jwt-decode'

export const setItem = (key: string, token: string) => {
  localStorage.setItem(key, token)
}
export const getItem = (key: string): string => {
  return localStorage?.getItem(key) as string
}

export const isExpiredToken = () => {
  type decodedPorps = {
    id: string,
    exp: number,
    iat: number
  }
  const token = getItem('TOKEN_KEY')
  if (token !== null) {
    const decoded: decodedPorps = jwt(token)
    const date = new Date(0)
    date.setUTCSeconds(decoded?.exp)
    return date.valueOf() > new Date().valueOf() ? false : true
  }
  return true
}

export const exit = () => {
  localStorage.removeItem('TOKEN_KEY')
  localStorage.removeItem('USER')
}
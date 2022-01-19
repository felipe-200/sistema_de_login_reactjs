import jwt from 'jwt-decode'
export const setToken = (token: string) => {
  localStorage.setItem('TOKEN_KEY', token)
}
export const getToken = (): string => {
  return localStorage?.getItem('TOKEN_KEY') as string
}

export const isExpiredToken = () => {
  type decodedPorps = {
    id: string,
    exp: number,
    iat: number
  }
  const token = getToken()
  const decoded: decodedPorps = jwt(token)
  const date = new Date(0)
  date.setUTCSeconds(decoded?.exp)
  return date.valueOf() > new Date().valueOf() ? false : true
}
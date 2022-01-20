import { isExpiredToken } from './auth'
import { Navigate } from 'react-router-dom'
import { App } from '../Pages/App'

export const PrivateRoute = () => {
  const isExpired = isExpiredToken()
  return isExpired ? <Navigate to="/" /> : <App />
}
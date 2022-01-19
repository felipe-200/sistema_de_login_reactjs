import { isExpiredToken } from './auth'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const isExpired = isExpiredToken()
  return isExpired ? <Navigate to="/" /> : <Outlet />
}
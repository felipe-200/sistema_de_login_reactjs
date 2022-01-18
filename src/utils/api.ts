import axios from 'axios'
import { getToken } from './auth'

const token = getToken()


const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'x-access-token': token
  }
})

export default api
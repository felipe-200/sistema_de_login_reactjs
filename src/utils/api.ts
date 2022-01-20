import axios from 'axios'
import { getItem } from './auth'

const token = getItem('TOKEN_KEY')


const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'x-access-token': token
  }
})

export default api
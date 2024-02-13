import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' })

export const signup = (authdata) => { API.post('/user/signup', authdata) }
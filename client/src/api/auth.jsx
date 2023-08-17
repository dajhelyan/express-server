import axios from 'axios'

const API = 'http://localhost:3000/api'

export const logIn = (user) => {
  console.log(user);
  return axios.post(`${API}/login`, user)
}
import axios from 'axios';

const authData = JSON.parse(localStorage.getItem('auth'));
const token = (authData && authData.token) || '';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    common: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  },
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

api.interceptors.request.use((req) => {
  const authData = JSON.parse(localStorage.getItem('auth'));
  const token = (authData && authData.token) || '';
  req.headers.authorization = token;
  return req;
});

export default api;

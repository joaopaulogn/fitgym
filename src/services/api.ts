import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'x-access-token': token },
});

export default api;

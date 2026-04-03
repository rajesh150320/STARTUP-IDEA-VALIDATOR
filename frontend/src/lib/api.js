import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://startup-idea-validator-hzr1.onrender.com/api/v1',
  timeout: 30000,
});

import axios from 'axios';

export const ApiManager = axios.create({
  baseURL: 'http://37.32.8.14:3002/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

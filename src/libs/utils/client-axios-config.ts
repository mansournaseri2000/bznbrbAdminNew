import axios from 'axios';

export const clientApiManagerV2 = axios.create({
  baseURL: 'https://api-client.darkube.app/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

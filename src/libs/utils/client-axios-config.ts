import axios from 'axios';

const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const credentials = `${username}:${password}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

export const clientApiManagerV2 = axios.create({
  baseURL: 'https://api-admin-dev.darkube.app/v1/',
  headers: {
    'up-auth': `Basic ${encodedCredentials}`,
    'Content-Type': 'application/json',
  },
});

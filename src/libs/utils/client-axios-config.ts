import axios from 'axios';

const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const credentials = `${username}:${password}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

export const clientApiManagerV2 = axios.create({
  baseURL: 'https://api-client.darkube.app/v1/',
  headers: {
    'Content-Type': 'application/json',
    'up-auth': `Basic ${encodedCredentials}`,

  },
});


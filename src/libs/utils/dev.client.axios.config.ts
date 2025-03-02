import { redirect } from 'next/navigation';

import axios from 'axios';
import Cookies from 'universal-cookie';

const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const credentials = `${username}:${password}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

// Create an instance of axios
export const DevApiManager = axios.create({
  baseURL: 'https://api-admin-dev.darkube.app/v1/',
  // baseURL: 'http://37.32.8.14:3005/v1/',
  headers: {
    'up-auth': `Basic ${encodedCredentials}`,
  },
});

export const UploaderApiManager = axios.create({
  baseURL: 'https://uploader.bezanimbiroon.ir/admin/uploads/',
  headers: {
    'Content-Type': 'application/json',
    'up-auth': `Basic ${encodedCredentials}`,
  },
});

UploaderApiManager.interceptors.request.use(
  config => {
    const cookie = new Cookies();
    const token = cookie.get('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

DevApiManager.interceptors.request.use(
  config => {
    const cookie = new Cookies();
    const token = cookie.get('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor
DevApiManager.interceptors.response.use(
  response => {
    // Successful responses can be handled here if you want to transform the data
    return response;
  },
  error => {
    // Global error handling
    if (error.response) {
      // Server-side error (status code outside of 2xx)
      const statusCode = error.response.status;

      if (statusCode === 401) {
        console.error('Unauthorized access - perhaps the token has expired');
        // Optionally, redirect to login or refresh token
        // window.location.href = '/login'; // Example
      } else if (statusCode === 403) {
        console.error('Forbidden - You do not have permission to access this resource.');
      } else if (statusCode >= 500) {
        console.error('Server error - Please try again later.');
        redirect('/error');
      } else {
        console.error(`Error: ${error.response.statusText}`);
      }
    } else if (error.request) {
      // Client-side or network error
      console.error('Network error - the request was made but no response was received');
      redirect('/error');
    } else {
      // Something else caused the error
      redirect('/error');
      console.error('Error:', error.message);
    }

    // Return a rejected promise to handle the error in the calling function
    return Promise.reject(error);
  }
);

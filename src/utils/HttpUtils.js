import http from 'axios';
import { api } from '../constants';

const Http = http.create({
  baseURL: api.API_SERVER_URL,
});

// Function to add custom header
export const addHttpHeaders = (headers) => {
  Http.defaults.headers = { ...Http.defaults.headers, ...headers };
};

export const getToken = () => {
  return localStorage.getItem('token');
};

/** Request interceptos  */
Http.interceptors.request.use((config) => {
  let token = null;

  token = getToken();

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
});

// Http.defaults.timeout = 30000;

/** Http default params  */
Http.defaults.params = {};

export default Http;

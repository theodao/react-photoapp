import { api } from './constants';

const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment
  ? api.DEV_API_BASE_URL
  : api.PROD_API_BASE_URL;

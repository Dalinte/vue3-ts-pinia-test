import axios from 'axios';
import { BASE_API_URL } from '@shared/api/config.ts';

export const HttpClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
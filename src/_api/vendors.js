import axios from 'axios';
import { BACKEND_SERVER } from './constants';

const BASE_URL = `${BACKEND_SERVER}/vendors`;

const api = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  timeout: 10000,
  contentType: 'application/json',
});

const createVendor = vendorDetails => api
  .post(
    'createVendor',
    { ...vendorDetails },
    {},
  );

const createNewItem = (name, price, file) => api
  .post(
    'createNewItem',
    { name, price, file },
    {},
  );

export default {
  createVendor,
  createNewItem,
};

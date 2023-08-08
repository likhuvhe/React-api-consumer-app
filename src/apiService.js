import axios from 'axios';

const API_URL = 'https://api.test-sfx-hub.co.za/api/utility/province';

const api = axios.create({
  baseURL: API_URL,
});

export const setAuthHeader = (username, password) => {
  const basicAuth = 'Basic ' + btoa(username + ':' + password);
  api.defaults.headers.common['Authorization'] = basicAuth;
};

export const get = () => api.get();

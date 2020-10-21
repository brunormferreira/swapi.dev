/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: `https://swapi.dev/api`,
});

export default api;

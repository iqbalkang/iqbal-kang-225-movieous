import axios from 'axios';

const customFetch = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/v1',
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default customFetch;

import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 60000
});


export { instance };
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ecomdummy.onrender.com/api',
  timeout: 5000,
});

export default instance;

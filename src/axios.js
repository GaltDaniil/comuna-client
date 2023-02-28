import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://http://62.113.99.197/:4444',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
});

export default instance;

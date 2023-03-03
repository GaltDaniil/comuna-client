import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://95.163.242.251:4444',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
});

export default instance;

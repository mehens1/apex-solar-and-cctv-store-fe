import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const apiInstance = axios.create({
    baseURL: API_URL,
    timeout: 200000,
    headers: {
        'Content-Type': 'application/json',
    }
});

apiInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);
import axios from "axios";
import store from "../store";
import { clearUser } from "../store/actions/userAction";
import { clearToken } from "../store/actions/authAction";
import { SweetAlert } from "../components/customSwal";

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
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        };

        return config
    },
    (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            store.dispatch(clearUser());
            store.dispatch(clearToken());
            SweetAlert({
                title: "Session Expired",
                text: "Your session has expired. Please log in again.",
                icon: "warning",
            });
        }
        return Promise.reject(error);
    }
);
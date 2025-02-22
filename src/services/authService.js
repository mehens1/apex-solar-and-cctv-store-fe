import { apiInstance } from '../apiAxios/axios';
import { errorHandler } from "../utils/errorHandling";  

export const register = async (userData) => {
    try {
        const response = await apiInstance.post("/register", userData);
        return response.data;
    } catch (error) {
        throw new Error(errorHandler(error));
    }
};

export const login = async (credentials) => {
    try {
        const response = await apiInstance.post("/login", credentials);
        return response.data;
    } catch (error) {
        throw new Error(errorHandler(error));
    }
};

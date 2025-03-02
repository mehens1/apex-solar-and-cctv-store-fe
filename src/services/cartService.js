import { apiInstance } from '../apiAxios/axios'
import { errorHandler } from '../utils/errorHandling';

export const fetchCartService = async () => {
    try {
        const response = await apiInstance.get(`/user/cart`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching cart products:", error);
        return [];
    }
};

export const addToCartService = async (product) => {
    try {
        const payload = {
            product_id: product.id,
            quantity: 1
        };
        const response = await apiInstance.post(`/user/cart`, payload);
        return response.data.data;
    } catch (error) {   
        throw errorHandler(error);
    }
};

export const clearCartService = async () => {
    try {
        const response = await apiInstance.delete(`/user/cart`);
        return response.data.data;
    } catch (error) {   
        throw errorHandler(error);
    }
};

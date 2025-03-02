import { apiInstance } from '../apiAxios/axios'
import { errorHandler } from '../utils/errorHandling';

export const checkoutService = async (data) => {
    try {
        const response = await apiInstance.post(`/checkout`, data);
        return response.data.data;
    } catch (error) {
        console.error("Error submiting checkout:", error);
        throw "Error submiting checkout: " + errorHandler(error);
    }
};

export const verifyOrderService = async (reference) => {
    try {
        const response = await apiInstance.get(`/order?trxref=${reference}&reference=${reference}`);
        return response.data;
    } catch (error) {
        console.error("Error verifying order:", error);
        throw "Error verifying order: " + errorHandler(error);
    }
};

export const orderHistoryService = async () => {
    try {
        const response = await apiInstance.get(`/user/orders`);
        return response.data;
    } catch (error) {
        console.error("Error fetching order history:", error);
        throw "Error Fetching order history: " + errorHandler(error);
    }
};

export const orderDetailsService = async (reference) => {
    try {
        const response = await apiInstance.get(`/user/orders/${reference}`);
        return response.data;
    } catch (error) {
        console.error("Error Fetching order:", error);
        throw "Error Fetching order: " + errorHandler(error);
    }
};

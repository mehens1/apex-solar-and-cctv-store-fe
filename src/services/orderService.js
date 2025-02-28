import { apiInstance } from '../apiAxios/axios'
import { errorHandler } from '../utils/errorHandling';

export const checkoutService = async (data) => {
    try {
        const response = await apiInstance.post(`/checkout`, data);
        console.log("checkout response: ", response);
        return response.data.data;
    } catch (error) {
        console.error("Error submiting checkout:", error);
        throw "Error submiting checkout: " + errorHandler(error);
    }
};

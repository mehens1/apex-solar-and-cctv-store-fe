import { apiInstance } from '../apiAxios/axios'

export const fetchProducts = async (page = 1) => {
    try {
        const response = await apiInstance.get(`/products?page=${page}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

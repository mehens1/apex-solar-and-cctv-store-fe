import { apiInstance } from '../apiAxios/axios';

export const fetchCategories = async () => {
    try {
        const response = await apiInstance.get("/categories");
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

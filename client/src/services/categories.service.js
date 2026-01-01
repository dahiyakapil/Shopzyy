import { axiosInstance } from "../api/axiosInstance";

export const createCategory = async (categoryData) => {
    const response = await axiosInstance.post("category/create-category", categoryData);
    return response.data;
}


export const getAllCategories = async () => {
    const response = await axiosInstance.get("category/get-all-categories");
    return response.data;
}

export const deleteCategoryById = async (categoryId) => {
    const response = await axiosInstance.delete(`category/${categoryId}`);
    return response.data;
}
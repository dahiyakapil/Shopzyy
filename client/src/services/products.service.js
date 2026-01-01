import { axiosInstance } from "../api/axiosInstance"

export const getAllProrducts = async () => {
    const response = await axiosInstance.get("products/all-products");
    return response.data;
}

export const createProduct = async (productPayload) => {
    const response = await axiosInstance.post("products/create-product", productPayload);
    return response.data;
} 
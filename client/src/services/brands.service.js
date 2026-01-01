import { axiosInstance } from "../api/axiosInstance";

export const createBrand = async (brandData) => {
    const response = await axiosInstance.post("brands/create-brand", brandData);
    return response.data;
}


export const getAllBrands = async () => {
    const response = await axiosInstance.get("brands/get-all-brands");
    return response.data;
}
export const deleteBrandById = async (brandId) => {
    const response = await axiosInstance.delete(`brands/${brandId}`);
    return response.data;
}

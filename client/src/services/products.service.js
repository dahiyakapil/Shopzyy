import { axiosInstance } from "../api/axiosInstance"

export const getAllProrducts = async () =>{
    const response = await axiosInstance.get("products/all-products");
    return response.data;
}
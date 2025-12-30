import { axiosInstance } from "../api/axiosInstance";

export const loginAdmin = async (credentials) => {
    const response = await axiosInstance.post("/user/admin-login", {
        email: credentials.email,
        password: credentials.password
    }, { withCredentials: true });
    return response.data;
};
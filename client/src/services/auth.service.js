import { axiosInstance } from "../api/axiosInstance";

export const loginAdmin = async (credentials) => {
    const response = await axiosInstance.post("user/admin-login", {
        email: credentials.email,
        password: credentials.password
    }, { withCredentials: true });
    return response.data;
};

export const logoutAdmin = async () => {
    // Best-effort server logout: backend may clear httpOnly refresh cookie
    const response = await axiosInstance.post("user/logout", {}, { withCredentials: true });
    return response.data;
}
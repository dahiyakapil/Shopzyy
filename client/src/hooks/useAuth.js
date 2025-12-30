import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logout } from "../store/slice/auth.slice";

export const useAdminAuth = () => {
    const dispatch = useDispatch();
    const { admin, loading, error, isAuthenticated, token } = useSelector((state) => state.auth);

    const adminLogin = (credentials) => {
        dispatch(loginThunk(credentials)); 
    }

    const signoutAdmin = () => {
        dispatch(logout());
    }

    return { admin, loading, error, token, isAuthenticated, adminLogin, signoutAdmin };
}
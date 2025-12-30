import { loginAdmin } from "../../services/auth.service"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loginThunk = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await loginAdmin(credentials);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    })


const authSlice = createSlice({
    name: "auth",
    initialState: {
        admin: null,
        loading: false,
        error: null,
        isAuthenticated: !!localStorage.getItem("token")
    },

    reducers: {
        logout: (state) => {
            state.admin = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload.admin;
                state.isAuthenticated = true;
                state.error = null;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
                state.isAuthenticated = false;
            })
    }
})


export const { logout } = authSlice.actions;
export default authSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBrand, deleteBrandById, getAllBrands } from "../../services/brands.service";

export const CreateBrandThunk = createAsyncThunk(
    "brand/createBrand",
    async (brandData, thunkAPI) => {
        try {
            const response = await createBrand(brandData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const GetAllBrandsThunk = createAsyncThunk(
    "brand/getAllBrands",
    async (_, thunkAPI) => {
        try {
            const response = await getAllBrands();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const DeleteBrandThunkById = createAsyncThunk(
    "brand/deleteBrandById",
    async (brandId, thunkAPI) => {
        try {
            const response = await deleteBrandById(brandId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


export const brandSlice = createSlice({
    name: "brands",
    initialState: {
        brands: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(CreateBrandThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(CreateBrandThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.brands.push(action.payload.data);
                state.error = null;
            })
            .addCase(CreateBrandThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(GetAllBrandsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetAllBrandsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = action.payload.data || [];
                state.error = null;
            })
            .addCase(GetAllBrandsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(DeleteBrandThunkById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(DeleteBrandThunkById.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = state.brands.filter(
                    (brand) => brand._id !== action.payload.data._id
                );
                state.error = null;
            })
            .addCase(DeleteBrandThunkById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
    }
})


export default brandSlice.reducer;
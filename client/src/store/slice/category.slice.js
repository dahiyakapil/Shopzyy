import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCategory, deleteCategoryById, getAllCategories } from "../../services/categories.service";


export const CreateCategoryThunk = createAsyncThunk(
    "category/createCategory",
    async (categoryData, thunkAPI) => {
        try {
            const response = await createCategory(categoryData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWIthValue(error.response.data);
        }
    }
)

export const GetAllcategoryThunk = createAsyncThunk(
    "category/getAllcategory",
    async (_, thunkAPI) => {
        try {
            const response = await getAllCategories();
            return response;
        } catch (error) {
            return thunkAPI.rejectWWithValue(error.response.data);
        }
    }
)

export const DeleteCategoryThunkById = createAsyncThunk(
    "category/deleteCategoryById",
    async (categoryId, thunkAPI) => {
        try {
            const response = await deleteCategoryById(categoryId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


export const categorylice = createSlice({
    name: "category",
    initialState: {
        category: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(CreateCategoryThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(CreateCategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.category.push(action.payload.data);
                state.error = null;
            })
            .addCase(CreateCategoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(GetAllcategoryThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetAllcategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload.data || [];
                state.error = null;
            })
            .addCase(GetAllcategoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(DeleteCategoryThunkById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(DeleteCategoryThunkById.fulfilled, (state, action) => {
                state.loading = false;
                state.category = state.category.filter(
                    (category) => category._id !== action.payload.data._id
                );
                state.error = null;
            })
            .addCase(DeleteCategoryThunkById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
    }
})


export default categorylice.reducer;
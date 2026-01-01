import { useDispatch, useSelector } from "react-redux"
import { CreateCategoryThunk, DeleteCategoryThunkById, GetAllcategoryThunk } from "../store/slice/category.slice";

export const useCategory = () => {


    const dispatch = useDispatch();

    const { category, loading, error} = useSelector((state) => {
        return state.category;
    });

    // Create Category

    const createCategory = (categoryData) => {
        return dispatch(CreateCategoryThunk(categoryData));
    }

    // Load Categories
    const loadCategory = () => {
        return dispatch(GetAllcategoryThunk());
    }

    // Delete Category by ID
    const deleteCategoryById = (categoryId) => {
        return dispatch(DeleteCategoryThunkById(categoryId));
    }

    return {category, loading, error, createCategory, loadCategory, deleteCategoryById }
}
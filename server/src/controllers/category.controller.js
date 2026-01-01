import Category from "../models/category.model.js";
import asyncHandler from "express-async-handler"

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const newCategory = await Category.create({ name });
        return res.status(201).json({
            message: "Category created successfully",
            data: newCategory
        })
    } catch (error) {
        return res.status(500).json(
            {
                message: "Server Error",
                error: error.message
            }
        )
    }
}


export const getAllCategories = asyncHandler(async (req, res) => {
    const allCategories = await Category.find();
    return res.status(200).json({
        message: "Categories fetched successfully",
        data: allCategories
    })
})

export const deleteCategoryById = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;

    const findCategory = await Category.findById(categoryId);

    if (!findCategory) {
        return res.status(404).json({
            message: "Category not found"
        });
    }

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    return res.status(200).json({
        message: "Category deleted successfully",
        data: deletedCategory
    })
})
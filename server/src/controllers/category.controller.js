import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
    try {
        const {name} = req.body;

        const newCategory = await Category.create({name});
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
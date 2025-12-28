import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        return res.status(201).json({
            message: "Product created successfully",
            data: newProduct
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
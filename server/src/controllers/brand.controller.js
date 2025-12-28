import Brand from "../models/brand.model.js";

export const createBrand = async (req, res) => {
    try {
        const {name} = req.body;

        const newBrand = await Brand.create({name});
        return res.status(201).json({
            message: "Brand created successfully",
            data: newBrand
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
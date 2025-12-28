import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        requierd: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        trim: true,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String],
        required: true,
    }
}, { timestamps: true })


const Product = mongoose.model("Product", ProductSchema);
export default Product;
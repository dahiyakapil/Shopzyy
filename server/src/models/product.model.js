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
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        trim: true,

    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        trim: true,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    ratingCount: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String],
        required: true,
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
}, { timestamps: true })


const Product = mongoose.model("Product", ProductSchema);
export default Product;
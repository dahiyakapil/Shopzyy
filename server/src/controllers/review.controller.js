import asyncHandler from "express-async-handler";
import Review from "../models/review.model.js";
import Product from "../models/product.model.js";

export const createReview = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { rating, comment } = req.body;
  const userId = req.user._id;

  const existingReview = await Review.findOne({ 
    product: productId, 
    user: userId 
  });
  
  if (existingReview) {
    res.status(400);
    throw new Error("You have already reviewed this product");
  }

  const newReview = await Review.create({
    product: productId,
    user: userId,
    rating,
    comment: comment || ""
  });


  await Product.findByIdAndUpdate(productId, {
    $push: { reviews: newReview._id },
    $inc: { ratingCount: 1 } 
  });

  res.status(201).json({ 
    message: "Review created successfully", 
    review: newReview 
  });
});


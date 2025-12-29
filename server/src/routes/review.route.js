import express from "express";
import { createReview } from "../controllers/review.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const reviewRouter = express.Router();


reviewRouter.post("/:productId", authMiddleware, createReview)

export default reviewRouter;
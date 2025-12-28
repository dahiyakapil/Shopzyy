

import express from "express";
import { getAllUsers, getUsreById, registerUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

// API End Points
userRouter.post("/register", registerUser);
userRouter.get("/all-users", getAllUsers)
userRouter.get("/:id", getUsreById);

export default userRouter;
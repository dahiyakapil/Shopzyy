import express from "express";
import { getAllUsers, getUsreById, login, loginAdmin, registerUser } from "../controllers/user.controller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

// API End Points
userRouter.post("/register", registerUser);
userRouter.post("/login", login)
userRouter.post("/admin-login", loginAdmin)

userRouter.get("/all-users", authMiddleware, isAdmin, getAllUsers)
userRouter.get("/:id", getUsreById);

export default userRouter;
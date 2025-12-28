import express from "express";
import { getAllUsers, getUsreById, login, loginAdmin, registerUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

// API End Points
userRouter.post("/register", registerUser);
userRouter.post("/login", login)
userRouter.post("/admin-login", loginAdmin)

userRouter.get("/all-users", getAllUsers)
userRouter.get("/:id", getUsreById);

export default userRouter;
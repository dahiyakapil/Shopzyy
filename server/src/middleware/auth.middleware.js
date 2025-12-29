

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authMiddleware = (req, res, next) => {

    const authHeader = req?.headers?.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            // Ensure compatibility: some controllers expect `req.user._id`
            if (decoded && decoded.id && !decoded._id) {
                req.user._id = decoded.id;
            }
            next();
        }
        catch (error) {
            return res.status(401).json({ message: "Invalid Token" });
        }
    } else {
        return res.status(401).json({ message: "No Token Provided" });
    }
}


export const isAdmin = async (req, res, next) => {
    console.log(req.user)
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const { email, id } = req.user;

        let adminUser = null;
        if (email) {
            adminUser = await User.findOne({ email });
        } else if (id) {
            adminUser = await User.findById(id);
        }

        if (!adminUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (adminUser.role !== "admin") {
            return res.status(403).json({ message: "Access Denied" });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}
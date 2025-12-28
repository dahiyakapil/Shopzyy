import jwt from "jsonwebtoken";

export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "2d" })
}
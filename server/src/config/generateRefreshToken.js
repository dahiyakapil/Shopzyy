import jwt from "jsonwebtoken";

export const generateRefreshToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: "2d" })
}
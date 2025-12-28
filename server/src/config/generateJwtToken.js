import jwt from "jsonwebtoken";

export const generateJWTToken = (id) => {
    return jwt.sign({
        id: id
    }, process.env.JWT_SECRET, {
        expiresIn: "10d"
    })
}


export const authMiddleware = (req, res, next) => {

    const authHeader = req?.headers?.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
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
    const { email } = req.user;
    const amdinUser = await User.findOne({ email });

    if (amdinUser.role !== "admin") {
        return res.status(403).json({ message: "Access Denied," });
    } else {
        next();
    }
}
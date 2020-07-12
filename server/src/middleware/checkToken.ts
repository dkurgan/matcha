import { Request, Response, NextFunction } from "express";

const jwt = require('jsonwebtoken');

module.exports = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-chicken-curry')
    if (!token) return res.status(403).json({ message: "Token is required" });
    try {
        const decoded = jwt.verify(token, process.env.JWT);
        console.log(decoded)
        req.body.user = decoded.user;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token is not valid" });
    }
}

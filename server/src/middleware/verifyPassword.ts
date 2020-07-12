import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcryptjs';
const User = require('../models/User');

module.exports = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (!username || !password || (password.length < 6)) return res.status(401).json({ msg: "Check your password or email" });
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ msg: "Cannot find user" });
    bcrypt.compare(req.body.password, user.password, (err: Error, success: boolean) => {
        if (success) return next();
        return res.status(401).json({ msg: "Wrong password" });
    });
}
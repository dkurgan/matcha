import { Request, Response } from "express";
const express = require('express');
const router = express.Router();
const checkToken = require('../middleware/checkToken');
const verifyPassword = require('../middleware/verifyPassword');
import {body, validationResult} from 'express-validator'
import { JsonWebTokenError } from "jsonwebtoken";
import { Error } from "mongoose";
import bcrypt from 'bcryptjs';
const User = require('../models/User');
const jwt = require('jsonwebtoken');


//Authorize user
router.post('/login', verifyPassword, async (req: Request, res: Response) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ msg: "Cannot find user" });
    try {
        jwt.sign({ user: { id: user.id } }, process.env.JWT, ({ expiresIn: "2 days" }), (err: JsonWebTokenError, token: string) => {
        if (err) throw Error;
       return res.send(token);
    });
    } catch (error) {return res.status(500).json({ msg: "Developer suckssss,server error" });}
});

//Register User
router.post('/register', body('username').isEmail(), body('password').isLength({ min: 6 }), async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(401).json({ msg: "Check email or password" });
    let { username, firstName, password, secondName } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ msg: "User already exist" });
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        user = new User({ username, password, firstName, secondName });
        await user.save();
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT, ({ expiresIn: "2 days" }), (err: JsonWebTokenError, token: string) => {
            if (err) throw Error;
           return res.send(token);
        });
    } catch (error) {
       return res.status(500).json({ msg: "server error" });
    }
})

//Update user
router.patch('/update', checkToken, verifyPassword, async (req: Request, res: Response) => {
    const { username, firstName, secondName } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ msg: "Cannot find user" });
        await User.findOneAndUpdate(user.name, {
            firstName: firstName || user.firstName,
            username: username || user.username,
            secondName: secondName || user.secondName
        });
    } catch (error) {
        return res.status(500).json({ msg: "Say hello to developer, server error" });
    }
})

module.exports = router
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const User = require('../models/User');
const checkToken = require('../middleware/checkToken');
const verifyPassword = require('../middleware/verifyPassword');
import { body, validationResult} from 'express-validator';
import { Request, Response } from "express";

//Create Profile
router.post('/create', checkToken, body('gender'), async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) res.status(400).json({ msg: "Gender is required" })
    const { hobby, bio, gender, location } = req.body;
    const profile = await Profile.findOne({ username: req.body.user.id });
    if (profile) return res.status(400).json({ msg: "Profile for this user already exist" });
    const prof = new Profile({
        username: req.body.user.id,
        hobby,
        gender,
        bio,
        location
    });
    await prof.save();
    return res.status(201).json({ msg: "Created" });
});

//Update Profile
router.patch('/update', checkToken, async (req: Request, res: Response) => {
    const { username, bio, location } = req.body;
    const profile = await Profile.findOne({ username: req.body.user.id });
    if (!profile) return res.status(400).json({ msg: "Cannot find user" });
    await Profile.findOneAndUpdate({
        bio: bio || profile.bio,
        location: location || profile.location
    });
    return res.status(201).json({ msg: "Updated" });
});

//Delete Profile and User
router.delete('/delete', checkToken, verifyPassword, async (req: Request, res: Response) => {
    const { username } = req.body;
    const profile = await Profile.findOne({ username: req.body.user.id });
    const user = await User.findById(req.body.user.id);
    if (!user || !profile) return res.status(400).json({ msg: "Cannot find user or profile" });
    await User.findOneAndRemove(username);
    await Profile.findOneAndRemove({ user: { username } });
    return res.status(201).json({ msg: "Deleted" });
});

module.exports = router;

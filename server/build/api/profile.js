"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile');
var User = require('../models/User');
var checkToken = require('../middleware/checkToken');
var verifyPassword = require('../middleware/verifyPassword');
var express_validator_1 = require("express-validator");
//Create Profile
router.post('/create', checkToken, express_validator_1.body('gender'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err, _a, hobby, gender, firstName, profile, prof;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                err = express_validator_1.validationResult(req);
                if (!err.isEmpty())
                    res.status(400).json({ msg: "Gender is required" });
                _a = req.body, hobby = _a.hobby, gender = _a.gender, firstName = _a.firstName;
                console.log(req.body);
                return [4 /*yield*/, Profile.findOne({ username: req.body.user.id })];
            case 1:
                profile = _b.sent();
                if (profile)
                    return [2 /*return*/, res.status(400).json({ msg: "Profile for this user already exist" })];
                prof = new Profile({
                    username: req.body.user.id,
                    hobby: hobby,
                    gender: gender,
                    firstName: firstName
                });
                return [4 /*yield*/, prof.save()];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(201).send(prof)];
        }
    });
}); });
//Get Profile
router.get('/', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Profile.findOne({ username: req.body.user.id })];
            case 1:
                profile = _a.sent();
                if (!profile)
                    return [2 /*return*/, res.status(400).json({ msg: "Cannot find profile" })];
                return [2 /*return*/, res.send(profile)];
        }
    });
}); });
//Update Profile
router.patch('/update', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, bio, location, profile;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, bio = _a.bio, location = _a.location;
                return [4 /*yield*/, Profile.findOne({ username: req.body.user.id })];
            case 1:
                profile = _b.sent();
                if (!profile)
                    return [2 /*return*/, res.status(400).json({ msg: "Cannot find user" })];
                return [4 /*yield*/, Profile.findOneAndUpdate({
                        bio: bio || profile.bio,
                        location: location || profile.location
                    })];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(201).json({ msg: "Updated" })];
        }
    });
}); });
//Delete Profile and User
router.delete('/delete', checkToken, verifyPassword, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, profile, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = req.body.username;
                return [4 /*yield*/, Profile.findOne({ username: req.body.user.id })];
            case 1:
                profile = _a.sent();
                return [4 /*yield*/, User.findById(req.body.user.id)];
            case 2:
                user = _a.sent();
                if (!user || !profile)
                    return [2 /*return*/, res.status(400).json({ msg: "Cannot find user or profile" })];
                return [4 /*yield*/, User.findOneAndRemove(username)];
            case 3:
                _a.sent();
                return [4 /*yield*/, Profile.findOneAndRemove({ user: { username: username } })];
            case 4:
                _a.sent();
                return [2 /*return*/, res.status(201).json({ msg: "Deleted" })];
        }
    });
}); });
module.exports = router;

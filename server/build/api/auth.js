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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var checkToken = require('../middleware/checkToken');
var verifyPassword = require('../middleware/verifyPassword');
var express_validator_1 = require("express-validator");
var mongoose_1 = require("mongoose");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User = require('../models/User');
var jwt = require('jsonwebtoken');
//Authorize user
router.post('/login', verifyPassword, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User.findOne({ username: req.body.username })];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, res.status(400).json({ msg: "Cannot find user" })];
                try {
                    jwt.sign({ user: { id: user.id } }, process.env.JWT, ({ expiresIn: "2 days" }), function (err, token) {
                        if (err)
                            throw mongoose_1.Error;
                        return res.send(token);
                    });
                }
                catch (error) {
                    return [2 /*return*/, res.status(500).json({ msg: "Developer suckssss,server error" })];
                }
                return [2 /*return*/];
        }
    });
}); });
//Register User
router.post('/register', express_validator_1.body('username').isEmail(), express_validator_1.body('password').isLength({ min: 6 }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, _a, username, firstName, password, secondName, user, salt, payload, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                error = express_validator_1.validationResult(req);
                if (!error.isEmpty())
                    return [2 /*return*/, res.status(401).json({ msg: "Check email or password" })];
                _a = req.body, username = _a.username, firstName = _a.firstName, password = _a.password, secondName = _a.secondName;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, User.findOne({ username: username })];
            case 2:
                user = _b.sent();
                if (user)
                    return [2 /*return*/, res.status(400).json({ msg: "User already exist" })];
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 3:
                salt = _b.sent();
                return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
            case 4:
                password = _b.sent();
                user = new User({ username: username, password: password, firstName: firstName, secondName: secondName });
                return [4 /*yield*/, user.save()];
            case 5:
                _b.sent();
                payload = { user: { id: user.id } };
                jwt.sign(payload, process.env.JWT, ({ expiresIn: "2 days" }), function (err, token) {
                    if (err)
                        throw mongoose_1.Error;
                    return res.send(token);
                });
                return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                return [2 /*return*/, res.status(500).json({ msg: "server error" })];
            case 7: return [2 /*return*/];
        }
    });
}); });
//Update user
router.patch('/update', checkToken, verifyPassword, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, firstName, secondName, user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, firstName = _a.firstName, secondName = _a.secondName;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User.findOne({ username: username })];
            case 2:
                user = _b.sent();
                if (user)
                    return [2 /*return*/, res.status(400).json({ msg: "Cannot find user" })];
                return [4 /*yield*/, User.findOneAndUpdate(user.name, {
                        firstName: firstName || user.firstName,
                        username: username || user.username,
                        secondName: secondName || user.secondName
                    })];
            case 3:
                _b.sent();
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                return [2 /*return*/, res.status(500).json({ msg: "Say hello to developer, server error" })];
            case 5: return [2 /*return*/];
        }
    });
}); });
module.exports = router;

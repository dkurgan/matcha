"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('dotenv').config();
var ConnectDB = require('./config/db');
var app = express_1.default();
//Fight with CORS Policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
var PORT = 4000 || process.env.PORT;
ConnectDB();
app.use(express_1.default.json());
app.use('/api/auth', require('./api/auth'));
app.use('/api/profile', require('./api/profile'));
app.listen(PORT, function () { return console.log("Running on " + PORT); });

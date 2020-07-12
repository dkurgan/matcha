"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    var token = req.header('auth-chicken-curry');
    if (!token)
        return res.status(403).json({ message: "Token is required" });
    try {
        var decoded = jwt.verify(token, process.env.JWT);
        console.log(decoded);
        req.body.user = decoded.user;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: "Token is not valid" });
    }
};

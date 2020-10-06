"use strict";
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
});
module.exports = mongoose.model('user', UserSchema);

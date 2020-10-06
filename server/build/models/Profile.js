"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProfileSchema = new mongoose_1.default.Schema({
    username: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    hobby: {
        type: Array
    },
    bio: {
        type: String
    },
    location: {
        type: Object
    }
});
module.exports = mongoose_1.default.model('profile', ProfileSchema);

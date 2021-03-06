import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
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
})

module.exports = mongoose.model('profile', ProfileSchema);
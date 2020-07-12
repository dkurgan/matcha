import { Error } from "mongoose";

const mongoose = require('mongoose');

async function ConnectDB(){
    try {
        await mongoose.connect(process.env.MongoDB, { //takeout mongoose warnings
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = ConnectDB
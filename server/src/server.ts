import express, { Request, Response, NextFunction } from "express";
require('dotenv').config();
const ConnectDB = require('./config/db');

const app = express();

//Fight with CORS Policy
app.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const PORT = 4000 || process.env.PORT;

ConnectDB();

app.use(express.json());
app.use('/api/auth', require('./api/auth'));
app.use('/api/profile', require('./api/profile'));

app.listen(PORT, ()=> console.log(`Running on ${PORT}`))
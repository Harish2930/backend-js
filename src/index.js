import dotenv from "dotenv";
import mongoose from "mongoose";
import connnectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})


connnectDB()
.then(() => {
    app.listen(process.env.PORT || 8000)
})
.catch((err) => {
    console.log("MONGODB connection failed !!", err);
})
import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(()=> console.log("MongoDB connected"))
    .catch((err)=> console.log(err));
}

export default connectDB;
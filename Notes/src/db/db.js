import mongoose from 'mongoose'
import config from '../configs/config.js';

async function connectDB() {
    try{
        const connect = await mongoose.connect(`config.MONGODB_URI/notes`)
    } catch(error){
        console.log(error.message);
    }
}

export default connectDB
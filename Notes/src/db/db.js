import mongoose from 'mongoose'
import config from '../configs/config.js';

async function connectDB() {
    try{
        const connect = await mongoose.connect(`${config.MONGODB_URI}/notes`)
        console.log(connect.connection.host);
        
    } catch(error){
        console.log(error.message);
    }
}

export default connectDB
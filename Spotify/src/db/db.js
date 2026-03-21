import mongoose from 'mongoose'
import config from '../configs/config.js'

async function connectDB(){
    try{
        const connect = await mongoose.connect(`${config.MONGODB_URI}/spotify`)
    } catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB
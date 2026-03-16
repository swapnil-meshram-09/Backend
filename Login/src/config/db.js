import mongoose from 'mongoose'
import config from './config.js'

const connectDB = async() =>{
    try{
        const connected = await mongoose.connect(`${config.MONGODB_URI}/auth`)
        console.log(connected.connection.host);
        
    } catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB
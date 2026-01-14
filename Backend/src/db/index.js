import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () =>{
    try{
        const connected = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MONGODB_URI:', process.env.MONGODB_URI);
        console.log(`DB Connection: ${connected.connection.host}`)
        
    } catch(error){
        console.log(error);
        process.exit(1)
        // throw error
    }
}

export default connectDB
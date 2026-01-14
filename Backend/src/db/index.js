import mongoose from 'mongoose'
import DB_NAME from '../constants.js'

const connectDB = async () =>{
    try{
        const connected = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`DB Connection: ${connected.Connection.host}`)
        
    } catch(error){
        console.log(error);
        process.exit(1)
        // throw error
    }
}

export default connectDB
import mongoose from 'mongoose'
import DB_NAME from '../constants.js'

;(async () =>{
    try{
        const connectDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.log(error);
        throw error
        
    }
})()
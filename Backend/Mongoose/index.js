import mongoose from 'mongoose'
import DB_NAME from '../Mongoose/constants.js'

async function connectDB (){
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.log(error);
        
    }
}

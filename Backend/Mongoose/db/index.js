import mongoose from 'mongoose'
import { MONGODB } from '../constants.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

(async function dbConnect() {
    try{
       const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${}`)
    }catch(error){
        console.log(error);
    }

})()
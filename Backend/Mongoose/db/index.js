import mongoose from 'mongoose'
import { MONGODB } from '../constants.js'

(async function dbConnect() {
    try{
       const connection = await mongoose.connect()
    }catch(error){
        console.log(error);
    }

})()
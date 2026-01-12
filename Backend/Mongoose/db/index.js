import mongoose from 'mongoose'


(async function dbConnect() {
    try{
       const connection = await mongoose.connect()
    }catch(error){
        console.log(error);
    }

})()
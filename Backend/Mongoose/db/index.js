import mongoose from 'mongoose'


(async function dbConnect() {
    try{
        mongoose.connect()
    }catch(error){
        console.log(error);
    }

})()
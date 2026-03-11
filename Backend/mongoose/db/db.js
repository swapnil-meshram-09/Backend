import mongoose from 'mongoose'

const connectDB = async() =>{
    try{
        const connected = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(connected);
        
    } catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB
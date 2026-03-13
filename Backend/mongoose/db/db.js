import mongoose from 'mongoose'

const connectDB = async() =>{
    try{
        const connected = await mongoose.connect(`mongodb://localhost:27017/users`)
        console.log(connected.connection.host);
        
    } catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB
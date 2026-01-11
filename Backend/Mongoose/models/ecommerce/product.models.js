import mongoose from 'momgoose'

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
        
    },{timestamps:true})

    
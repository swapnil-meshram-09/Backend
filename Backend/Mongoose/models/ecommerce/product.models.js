import mongoose from 'momgoose'

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
        description:{
            type: String,
            required: true,
        },
        
    },{timestamps:true})

    
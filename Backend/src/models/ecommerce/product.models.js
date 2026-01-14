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
        price:{
            type: Number,
            required: true,
        },
        stock:{
            type: Number,
            required: true,
        }
    },{timestamps:true})

export const Product = mongoose.model('Product',productSchema)
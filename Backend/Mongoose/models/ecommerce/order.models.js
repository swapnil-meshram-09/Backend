import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        
    }, {timestamps: true})

export const Order = monggose.model('Order',orderScheme)
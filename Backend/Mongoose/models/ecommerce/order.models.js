import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        
    }, {timestamps: true})

export const Order = monggose.model('Order',orderSchema)
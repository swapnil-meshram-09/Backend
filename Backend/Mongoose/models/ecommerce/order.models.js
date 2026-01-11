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
        status: {
            enum: ['pending', 'cancelled','delivered'],
            required: true,
        },
    }, {timestamps: true})


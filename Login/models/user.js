import mongoose from 'mongoose'

const userScheme = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            lowercase: true
        },
        password:{
            type: String,
            required: true
        }
    },
    { timestamps: true}
)

const user = mongoose.model('user', userScheme)

export default user
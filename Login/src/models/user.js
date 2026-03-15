import mongoose from 'mongoose'

const userScheme = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            unique: true
        }
    },
    { timestamps: true}
)

const user = mongoose.model('user', userScheme)

export default user
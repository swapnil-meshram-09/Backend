import mongoose from 'mongoose'

const userScheme = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: [true, 'Username should be unique'],
            lowercase: true
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
            unique: [true, 'Email should be unique'],
            lowercase: true
        },
        password:{
            type: String,
            required: [true, 'Password is required'],
        }
    },
    { timestamps: true}
)

const user = mongoose.model('users', userScheme)

export default user
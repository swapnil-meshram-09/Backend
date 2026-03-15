import mongoose from 'mongoose'

const userScheme = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: [true, 'Username is not unique'],
            lowercase: true
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
            unique: [true, 'Email is not unique'],
            lowercase: true
        },
        password:{
            type: String,
            required: [true, 'Password is required'],
            unique: [true, 'Password is not unique']
        }
    },
    { timestamps: true}
)

const user = mongoose.model('user', userScheme)

export default user
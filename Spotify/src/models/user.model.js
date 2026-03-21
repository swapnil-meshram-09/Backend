import mongoose, { mongo } from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: [true, 'Username should be unique.'],
            required: [true, 'Username is required.']
        },
        email: {
            type: String,
            unique: [true, 'Email should be unique.'],
            required: [true, 'Email is required.']
        },
        password: {
            type: String,
            required: [true, 'Password is required.']
        }
    },
    { timestamps: true }
)

const userModel = mongoose.model('user', userSchema)

export default userModel
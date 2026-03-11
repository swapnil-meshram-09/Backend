import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: String,
        username: String,
        email: String
    },
    { timestamps: true}
)

const User = mongoose.model('user', userSchema)

export default User
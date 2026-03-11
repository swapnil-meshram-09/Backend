import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: String,
        username: String,
        email: String
    },
    { timestamps: true}
)

const user = mongoose.model('user', userSchema)

export default user
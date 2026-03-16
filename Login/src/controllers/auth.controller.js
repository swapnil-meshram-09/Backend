import userModel from '../models/user.model.js'
import crypto from 'crypto'

export async function register(req, res){
    const { username, email, password } = req.body

    const existingUser = await userModel.findOne({
        or: [
            { username },
            { email }
        ]
    })

    if(existingUser){
        res.status(209).json({
            message: 'User is already exists.'
        })
    }

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

    const registerUser = await userModel.create({
        username, 
        email,
        password: hashedPassword
    })




}
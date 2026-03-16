import userModel from '../models/user.model.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

export async function register(req, res){
    const { username, email, password } = req.body

    const existingUser = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(existingUser){
        return res.status(409).json({
            message: 'User is already exists.'
        })
    }

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

    const registerUser = await userModel.create({
        username, 
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: registerUser._id
        }, 
        'secret', 
        {
        expiresIn: '1d'
     })

    res.status(201).json({
        message: 'User register successfully.',
        user: {
            username,
            email
        },
        token
    })





}
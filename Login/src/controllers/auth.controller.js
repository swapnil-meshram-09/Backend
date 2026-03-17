import userModel from '../models/user.model.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { ref } from 'process'

export async function register(req, res){
    try{
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

    const accesstoken = jwt.sign({
        id: registerUser._id
        }, 'secret', {
        expiresIn: '1d'
     })

    const refreshToken = jwt.sign({
        id: registerUser._id
        }, 'secret', {
        expiresIn: '7d'
    })

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secret: true,
        sameSite: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(201).json({
        message: 'User register successfully.',
        user: {
            username,
            email
        },
        accesstoken
    })

    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}


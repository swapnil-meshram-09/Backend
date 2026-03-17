import userModel from '../models/user.model.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

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
    
        const user = await userModel.create({
            username, 
            email,
            password: hashedPassword
        })

        const accesstoken = jwt.sign({
            id: user._id
            }, 'secret', {
            expiresIn: '30m'
         })

        const refreshToken = jwt.sign({
            id: user._id
            }, 'secret', {
            expiresIn: '7d'
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secret: true,
            sameSite: 'strict',
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

export async function get(req, res){
    const token = req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(409).json({
            message: 'Token not found.'
        })
    }

    const decoded = jwt.verify(token, 'secret')

    const user = await userModel.findById(decoded.id)

    res.status(201).json({
        user
    })
}


export async function refreshToken(req, res){
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken){
        return res.status(409).json({
            message: 'RefreshToken not found.'
        })
    }

    const decoded = jwt.verify(refreshToken, 'secret')

    const user = await userModel.findById(decoded.id)

    const accessToken = jwt.sign({
        id: user._id,
       }, 'secret', {
        expiresIn: '15m'
    })

    const newRefreshToken = jwt.sign({
        id: user._id,
        }, 'secret', {
        expiresIn: '7d'      
    })

    res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true, 
        secret: true,
        sameSite: 'secret',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(201).json({
        message: 'Ok',
        user: {
            username,
            email
        },
        accessToken
    })
}


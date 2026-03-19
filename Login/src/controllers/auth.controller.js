import userModel from '../models/user.model.js'
import sessionModel from '../models/session.model.js'
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

        const passwordHash = crypto.createHash('sha256').update(password).digest('hex')
    
        const user = await userModel.create({
            username, 
            email,
            password: passwordHash
        })

         const refreshToken = jwt.sign({
            id: user._id
            }, 'secret', {
            expiresIn: '7d'
        })

        const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

        // const session = await sessionModel.findOne({
        //     refreshTokenHash,
        //     revoked: false
        // })

        // if(!session){
        //     return res.status(400).json({
        //         message: 'Session not found.'
        //     })
        // }

        // session.revoked = true
        // await session.save()

        const session = await sessionModel.create({
            user: user._id,
            refreshTokenHash: refreshTokenHash,
            ip: req.ip,
            userAgent: req.headers['user-agent']
        })

        const accesstoken = jwt.sign({
            id: user._id,
            sessionId: session._id
            }, 'secret', {
            expiresIn: '30m'
         })

        res.cookie('Refresh Token', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            message: 'User register successfully.',
            user: {
                username: user.username,
                email: user.email
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
        message: 'User found successfully.',
        user: {
            username: user.username,
            email: user.email
       }
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

    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    // const session = await sessionModel.create({
    //     user: decoded.id,
    //     refreshTokenHash: refreshTokenHash,
    //     ip: req.ip,
    //     userAgent: req['user-agent']
    // })

    const accessToken = jwt.sign({
        id: decoded.id,
        sessionId: session._id,
       }, 'secret', {
        expiresIn: '15m'
    })

    const newRefreshToken = jwt.sign({
        id: decoded.id,
        }, 'secret', {
        expiresIn: '7d'      
    })

    res.cookie('New Refresh Token', newRefreshToken, {
        httpOnly: true, 
        secure: true,
        sameSite: 'strict',
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


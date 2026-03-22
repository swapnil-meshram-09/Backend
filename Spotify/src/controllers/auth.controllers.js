import userModel from '../models/user.model.js'
import config from '../configs/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function registerUser(req, res){
    const { username, email, password } = req.body

    if(!username && !email && !password){
        return res.status(409).json({
            message: 'Username, email & password is required.'
        })
    }

    if(!username || !email || !password){
        return res.status(409).json({
            message: 'Username or email or password is required.'
        })
    }

    const isAlreadyRegister = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(isAlreadyRegister){
        return res.status(409).json({
            message: 'User is already register.'
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const userRegister = await userModel.create({
        username: username,
        email: email,
        password: hashPassword
    })

    const token = jwt.sign({
        id: userRegister._id 
    }, config.JWT_SECRET)

    res.cookie('Token', token)

    res.status(201).json({
        message: 'User created successfully.',
        user: userRegister
    })
}
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
            message: 'Username or email or password cannot be empty.'
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
    }, config.JWT_SECRET, {
        expiresIn: '1d'
    })

    res.cookie('Token', token)

    res.status(201).json({
        message: 'User created successfully.',
        user: userRegister
    })
}

export async function getUsers(req, res){
    const users = await userModel.find()

    if(!users){
        return res.status(409).json({
            message: 'Users not found.'
        })
    }

    res.status(200).json({
        message: 'User fetched successfully.',
        users: users
    })
}

export async function loginUser(req, res){
    const { username, email, password } = req.body

    if((!username && !password) || (!email && !password)){
        return res.status(409).json({
            message: 'User credentials are required.'
        })
    }

    if((!username || !password) && (!email || !password)){
        return res.status(409).json({
            message: 'User credentials are required.'
        })
    }

    const userFind = await userModel.findOne({
        $or: [
            { username }, 
            { email }
        ]
    })

    if(!userFind){
        return res.status(409).json({
            message: 'User not found.'
        })
    }

    const checkPassword = await bcrypt.compare(password, userFind.password)

    if(!checkPassword){
        return res.status(409).json({
            message: 'User credential are incorrect.'
        })
    }

    const token = jwt.sign({
        id: userFind._id
    }, config.JWT_SECRET, {
        expiresIn: '1d'
    })

    res.cookie('Token', token)

    res.status(201).json({
        message: 'User login successfully.',
        user: userFind
    })
}

export async function deleteUser(req, res){
    const { username, email, password } = req.body

    if((!username && !password) || (!email && !password)){
        return res.status(409).json({
            message: 'User credentials are required.'
        })
    }

    if((!username || !password) && (!email || !password)){
        return res.status(409).json({
            message: 'User credentials are required.'
        })
    }

    const userFind = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(!userFind){
        return res.status(409).json({
            message: 'User not found.'
        })
    }

    const checkPassword = await bcrypt.compare(password, userFind.password)

    if(!checkPassword){
        return res.status(409).json({
            message: 'User credential are incorrect.'
        })
    }

    const userDelete = await userModel.findOneAndDelete({
        $or: [
            { username },
            { email }
        ]
    })

    res.clearCookie()

    res.status(201).json({
        message: 'User delete successfully.',
        user: userDelete
    })
}

export async function updateUser(req, res){
    const { username, email, password } = req.body

    if((!username && !password) || (!email && !password)){
        return res.status(409).json({
            message: 'User credential are required.'
        })
    }

    if((!username || !password) && (!email || !password)){
        return res.status(409).json({
            message: 'User credential are required.'
        })
    }

    const userFind = await userModel.findOne({ email })

    if(!userFind){
        return res.status(409).json({
            message: 'User not found.'
        })
    }

    const userUpdate = await userModel.findOneAndUpdate({ email }, {
        $or: [
            { username },
            { password }
        ]
    })

    if(!userUpdate){
        return res.status(409).json({
            message: 'User not found.'
        })
    }

    

}
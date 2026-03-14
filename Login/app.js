import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import connectDB from './db/db.js'
import userModel from './models/user.js'

const app = express()
connectDB()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/create', (req, res) =>{
    let {username, email, password} = req.body

    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(password, salt, async (err, hash) =>{
            
           const createUser = await userModel.create({
               username,
                email, 
                password: hash
            })
            res.send(createUser)
        })
    })
})

app.listen(3000)
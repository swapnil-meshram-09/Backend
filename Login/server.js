import app from './src/app.js'
import connectDB from './src/config/db.js'
import userModel from './src/models/user.model.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import express from 'express'

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/create', (req, res) =>{
    const {username, email, password} = req.body

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

app.get('/login', (req, res) =>{
    res.render('login')
})

app.post('/login', async (req, res) =>{
    const {email, password} = req.body

    const user = await userModel.findOne({email})
    if(!user) return res.send('email or password is incorrect')

    // bcrypt.compare(password, user.password, (err, result) =>{
    // if(err) return res.send('Incorrect password')
    // if(! result) return res.send('Correct password')

     const result = await bcrypt.compare(password, user.password)
     if(!result) return res.send('Incorrect Password')

     const token = jwt.sign({email: user.email}, 'secret')
     res.cookie('token', token)
     res.send('Login Successfully')
})


app.get('/logout', (req, res) =>{
    res.cookie('token', '')
    res.redirect('/')
})


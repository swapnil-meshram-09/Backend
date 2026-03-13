import express from 'express'
import connectDB from './db/db.js'
import User from './models/user.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

const app = express()
connectDB()

app.get('/', (req, res) =>{
    res.send('server iss running')
})

app.get('/create', async (req, res) =>{
    const createUser = await User.create({
        name: 'name2',
        username: 'username',
        email: 'test@test.com'
    })

    res.send(createUser)
})

app.get('/find', async (req, res) =>{
    const find = await User.find()
    res.send(find)
})

app.get('/findSpecific', async (req, res) =>{
    const find = await User.find({name: 'name'})
    res.send(find)
})

app.get('/findOne', async (req, res) =>{
    // const findOne = await User.findOne()
    const findOne = await User.findOne({name: 'name2'})
    res.send(findOne)
})


app.get('/update', async (req, res) =>{
    const updateUser = await User.findOneAndUpdate({name: 'name'}, {username: 'new'})
    res.send(updateUser)
})

app.get('/replace', async (req, res) =>{
    const replaceUser = await User.findOneAndReplace({name: 'name2'}, {name: 'name3'})
    res.send(replaceUser)
})

app.get('/delete', async (req, res) =>{
    const deleteUser = await User.findOneAndDelete({name: 'name3'})
    res.send(deleteUser)
})

app.listen(3000)
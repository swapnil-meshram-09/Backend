import express from 'express'
import connectDB from './db/db.js'
import User from './models/user.js'

const app = express()
connectDB()

app.get('/', (req, res) =>{
    res.send('server is running')
})

app.get('/create', async (req, res) =>{
    const createUser = await User.create({
        name: 'name',
        username: 'username',
        email: 'test@test.com'
    })

    res.send(createUser)
})

app.get('/find', async (req, res) =>{
    
    res.send()
})

app.get('/update', async (req, res) =>{
    res.send()
})

app.get('/delete', async (req, res) =>{
    res.send()
})

app.listen(3000)
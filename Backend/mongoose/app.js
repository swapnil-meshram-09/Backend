import express from 'express'
import connectDB from './db/db.js'
import User from './models/user.js'

const app = express()
connectDB()

app.get('/', (req, res) =>{
    res.send('server is running')
})

app.get('/', () =>{

})

app.listen(3000)
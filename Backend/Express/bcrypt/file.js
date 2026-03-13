import express from 'express'
import bcrypt from 'bcrypt'

const app = express()

app.get('/', (req, res) =>{
    req.send()
})

app.listen(3000)
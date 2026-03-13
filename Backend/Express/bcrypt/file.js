import express from 'express'
import bcrypt from 'bcrypt'

const app = express()

app.get('/', (req, res) =>{
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash('password', salt, (err, hash) =>{
            console.log(hash);
        })
    })
    req.send('Done')
})

app.get('/verify', (req, res) =>{
    const result = bcrypt.compare('', 'password')
    console.log(result);
    
    res.send('Done')
})

app.listen(3000)
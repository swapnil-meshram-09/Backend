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

})

app.listen(3000)
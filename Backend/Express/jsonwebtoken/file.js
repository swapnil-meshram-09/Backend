import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())

app.get('/', (req, res) =>{
    const token = jwt.sign({email: 'test@test.com'}, 'secret')
    res.cookie('token', token)
    res.send('Done')
})

app.get('/verify', (req, res) =>{
    console.log(req.cookies.token);

    res.send('Done 2')
})

app.listen(3000)
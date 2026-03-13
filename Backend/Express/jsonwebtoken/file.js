import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

app.get('/', (req, res) =>{
    const token = jwt.sign({email: 'test@test.com'}, 'secret')
    req.send('Done')
})



app.listen(3000)
import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())

app.get('/', (req, res) =>{
    res.cookie('string', 'secret')
    res.send('Done')
})

app.get('/about', (req, res) =>{
    console.log(req.cookies)
    res.send(req.cookies.string)
})

app.listen(3000)
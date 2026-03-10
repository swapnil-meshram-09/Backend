import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.end('Server started.')
})

app.get('/about', (req, res)=>{
    res.send('About Page.')
})

app.listen(3000)
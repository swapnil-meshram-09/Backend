import express from 'express'

const app = express()

app.get('/', (req, res) =>{
    res.send('Server is started.')
})

app.get('/about', (req, res) =>{
    res.send('About Page.')
})

app.listen(3000)
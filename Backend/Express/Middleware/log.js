import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send('Server started.')
})

app.get('/about', ()=>{
    res.send('About Page')
})

app.listen(3000)
import express from 'express'

const app = express()

app.use((req, res, next)=>{
    console.log('Middle ware');
    next()
})

app.get('/', (req, res)=>{
    res.send('Server started.')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.listen(3000)
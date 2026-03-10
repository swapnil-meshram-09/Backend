import express from 'express'

const app = express()

app.use((req, res, next) =>{
    console.log('Middle ware ');
    next()
})

app.get('/', (req, res) =>{
    res.send('Server is started.')
})

app.get('/about', (req, res, next) =>{
    return next(new Error('Something went wrong.'))
})

app.use((err, req, res, next) =>{
    res.status(500).send('Something went wrong.')
})

app.listen(3000)
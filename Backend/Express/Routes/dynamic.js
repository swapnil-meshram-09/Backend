import express from 'express'

const app = express()

app.get('/', (req, res) =>{
    res.send('Server is running.');
})

app.get('/user/:username', (req, res) =>{
    res.send(req.params.username);
})

app.get('/user/:username/:id', (req, res) =>{
    res.send(req.params.id);
})

app.listen(3000)
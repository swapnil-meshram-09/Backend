import express from 'express'

const app = express()

app.get('/', (req, res) =>{
    console.log('Server is running.');
})

app.get('/user/:username', (req, res) =>{
    console.log(req.params.username);
})

app.get('/user/:username/:id', (req, res) =>{
    console.log(req.params.id);
})

app.listen(3000)
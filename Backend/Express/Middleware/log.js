import express from 'express'

const app = express()

app.use(()=>{
    console.log('Middle ware');
    
})


app.get('/', (req, res)=>{
    res.send('Server started.')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.listen(3000)
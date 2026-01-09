import express from 'express'

const app = express()

app.get('/',(req,res) =>{
    res.send('server is running...')
})

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Serve at http://localhost:${PORT}`); 
})
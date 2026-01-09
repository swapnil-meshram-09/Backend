import express from 'express'

const app = express()

const PORT = 3000

app.get('/',(req,res) =>{
    res.send('server is running...')
})

app.listen(PORT,() =>{
    console.log(`Serve at http://localhost:${PORT}`); 
})
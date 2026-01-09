import express from 'express'

const app = express()

const PORT = 3000

app.get('/',(req,res) =>{
    setTimeout(() =>{
        res.send('Server is running..')
    },2000)
})

app.listen(PORT,() =>{
    console.log(`Serve at http://localhost:${PORT}`);  
})
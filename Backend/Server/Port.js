import express from 'express'
import env from 'dotenv'

const app = express()

const port = env.config()

const PORT2 = process.env.port

app.get('/',(req,res) =>{
    console.log('server is running...'); 
})

app.listen(PORT2,() =>{
    console.log(`Serve at http://localhost:${PORT2}`);
    
})
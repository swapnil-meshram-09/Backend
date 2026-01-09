import express from 'express'
import env from 'dotenv'

const app = express()

// const PORT = env.config()

// const PORT2 = process.env.PORT

const PORT2 = 3000

app.get('/',(req,res) =>{
    console.log('server is running...'); 
})

app.listen(PORT2,() =>{
    console.log(`Serve at http://localhost:${PORT2}`);
    
})
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: './env'
})

// -r dotenv/config --experimental-json-modules

connectDB()
.then(() =>{

   app.on('error', (error) =>{
       console.log(error);
       throw error
   })

   app.listen(process.env.PORT || 4000, () =>{
    console.log(`serve at http://localhost:${process.env.PORT}`);
    
   })
})
.catch((error) =>{
   console.log(error);
   
})
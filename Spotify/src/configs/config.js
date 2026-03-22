import dotenv from 'dotenv'

dotenv.config()

if(!process.env.PORT){
    console.log('Port not found in env.');
}

if(!process.env.MONGODB_URI){
    console.log('Mongodb URI not found in env.');
}

if(!process.env.JWT_SECRET){
    console.log('JWT Secret not found in env.');
    
}

const config = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config
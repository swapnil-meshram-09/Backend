import dotenv from 'dotenv'

dotenv.config()

if(!process.env.PORT){
    return res.status(409).json({
        message: 'Port not found in env.'
    })
}

if(!process.env.MONGODB_URI){
    return res.status(409).json({
        message: 'Mongodb URI not found in env.'
    })
}

const config = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI
}

export default config
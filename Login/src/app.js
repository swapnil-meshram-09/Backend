import express from 'express'
import config from './config/config.js'

const app = express()

app.listen(process.env.PORT)

export default app
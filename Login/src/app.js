import express from 'express'
import config from './config/config.js'

const app = express()

app.listen(config.PORT)

export default app
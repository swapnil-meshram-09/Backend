import express from 'express'
import config from './config/config.js'
import authRouter from './routes/auth.routes.js'

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser())

app.use('/api/auth', authRouter)

app.listen(config.PORT)

export default app
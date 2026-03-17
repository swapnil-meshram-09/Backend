import { Router } from 'express'
// import * as controller from '../controllers/auth.controller.js'
import { register, get, refreshToken } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.get('/register', (req, res) => {
  res.render('index')
})

authRouter.post('/register', register)

authRouter.post('/get', get)

authRouter.post('/refreshToken', refreshToken)

export default authRouter
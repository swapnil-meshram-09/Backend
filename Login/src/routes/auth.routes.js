import { Router } from 'express'
// import * as controller from '../controllers/auth.controller.js'
import { register, get } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.get('/register', (req, res) => {
  res.render('index')
})

authRouter.post('/register', register)

authRouter.post('/get', get)

export default authRouter
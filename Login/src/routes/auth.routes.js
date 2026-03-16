import { Router } from 'express'
import { register } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.get('/register', (req, res) => {
  res.send("Register API working")
})

authRouter.post('/register', register)

export default authRouter
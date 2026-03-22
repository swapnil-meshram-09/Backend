import { Router } from 'express'
import { registerUser, getUsers, loginUser } from '../controllers/auth.controllers.js'

const authRouter = Router()

authRouter.post('/register', registerUser)

authRouter.get('/get-users', getUsers)

authRouter.post('/login-user', loginUser)

export default authRouter
import { Router } from 'express'
import { registerUser, getUsers } from '../controllers/auth.controllers.js'

const authRouter = Router()

authRouter.post('/register', registerUser)

authRouter.get('/get-users', getUsers)

export default authRouter
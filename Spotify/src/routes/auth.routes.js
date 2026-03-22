import { Router } from 'express'
import { registerUser, getUsers, loginUser, deleteUser } from '../controllers/auth.controllers.js'

const authRouter = Router()

authRouter.post('/register-user', registerUser)

authRouter.get('/get-users', getUsers)

authRouter.post('/login-user', loginUser)

authRouter.delete('/delete-user', deleteUser)

export default authRouter
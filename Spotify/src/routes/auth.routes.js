import { Router } from 'express'
import { registerUser, getUsers, loginUser, deleteUser, updateUser } from '../controllers/auth.controllers.js'

const authRouter = Router()

authRouter.post('/register-user', registerUser)

authRouter.get('/get-users', getUsers)

authRouter.post('/login-user', loginUser)

authRouter.delete('/delete-user', deleteUser)

authRouter.patch('/update-user', updateUser)

export default authRouter
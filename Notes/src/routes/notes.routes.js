import { Router } from 'express'
import { create, gets } from '../controllers/notes.controllers.js'

const notesRouter = Router()

notesRouter.post('/', create)

notesRouter.get('/', gets)

export default notesRouter
import { Router } from 'express'
import { createNote, getNotes } from '../controllers/notes.controllers.js'

const notesRouter = Router()

notesRouter.post('/', createNote)

notesRouter.get('/', getNotes)

export default notesRouter
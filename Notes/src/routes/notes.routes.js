import { Router } from 'express'
import { createNote, getNotes, deleteNote} from '../controllers/notes.controllers.js'

const notesRouter = Router()

notesRouter.post('/', createNote)

notesRouter.get('/', getNotes)

notesRouter.delete('/', deleteNote)

export default notesRouter
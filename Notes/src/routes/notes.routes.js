import { Router } from 'express'
import { createNote, getNotes, deleteNote, updateNote} from '../controllers/notes.controllers.js'

const notesRouter = Router()

notesRouter.post('/', createNote)

notesRouter.get('/', getNotes)

notesRouter.delete('/', deleteNote)

notesRouter.patch('/', updateNote)

export default notesRouter
import { Router } from 'express'
import { createNote, getNotes, deleteNote, updateNote} from '../controllers/notes.controllers.js'

const notesRouter = Router()

notesRouter.post('/create-note', createNote)

notesRouter.get('/get-notes', getNotes)

notesRouter.delete('/delete-note', deleteNote)

notesRouter.patch('/update-note', updateNote)

export default notesRouter
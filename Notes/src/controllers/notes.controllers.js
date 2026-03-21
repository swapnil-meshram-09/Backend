import notesModel from '../models/notes.model.js'

export async function createNote(req, res){
    const { title, description } = req.body

    if(!title && !description ){
        return res.status(409).json({
            message: 'Title & description, both are missing.'
        })
    }

    if(!title){
        return res.status(404).json({
            message: 'Title is missing.'
        })
    }

    if(!description){
        return res.status(404).json({
             message: 'Desciption is missing.'
        })
    }

    const isAlreadyExist = await notesModel.findOne({ title: title })

    if(isAlreadyExist){
        return res.status(409).json({
            message: 'Note is already exists.'
        })
    }

    const noteCreate = await notesModel.create({
        title: title,
        description: description
    })

    res.status(201).json({
        message: 'Note created successfully.',
        note: noteCreate
    })
}

export async function getNotes(req, res){
    const notes = await notesModel.find()

    if(!notes){
        return res.status(409).json({
            message: 'Notes not found.'
        })
    }

    res.status(200).json({
        message: 'Notes fetched successfully.',
        notes: notes
    })
}

export async function deleteNote(req, res){
    const { title } = req.body

    if(!title){
        return res.status(404).json({
            message: 'Title not found.'
        })
    }

    const noteDelete = await notesModel.findOneAndDelete({ title })

    if(!noteDelete){
        return res.status(409).json({
            message: 'Note not found.'
        })
    }

    res.status(200).json({
        message: 'Note deleted successfully',
        note: noteDelete
    })
}

export async function updateNote(req, res){
    const { title, description } = req.body

    if(!title && !description){
        return res.status(404).json({
            message: 'Title & description not found.'
        })
    }

    if(!title){
        return res.status(404).json({
            message: 'Title not found.'
        })
    }

    if(!description){
        return res.status(404).json({
            message: 'Description not found.'
        })
    }

    const noteUpdate = await notesModel.findOneAndUpdate({ title }, { description })

    if(!noteUpdate){
        return res.status(409).json({
            message: 'Note not found.'
        })
    }

    res.status(201).json({
        message: 'Note updated successfully.',
        note: noteUpdate
    })
}
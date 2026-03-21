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

    const isAlready = await notesModel.findOne({ title: title })

    // if(title === isAlready.title){
    //     return res.status(409).json({
    //         message: 'Title is already present '
    //     })
    // }

    const noteCreate = await notesModel.create({
        title: title,
        description: description
    })

    // const checkTitle = note.title

    // const checkNote = await notesModel.findOne({ checkTitle })

    // if(!checkNote){
    //     return res.status(404).json({
    //         message: 'Title is not found.'
    //     })
    // }

    res.status(201).json({
        message: 'Note created successfully.',
        note: noteCreate
    })
}

export async function getNotes(req, res){
    const notes = await notesModel.find()

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

    res.status(200).json({
        message: 'Note deleted successfully',
        note: noteDelete.title
    })
}

export async function updateNote(req, res){
    const { title, description } = req.body

    if(!description){
        return res.status(404).json({
            message: 'Description not found.'
        })
    }

    const noteUpdate = await notesModel.findOneAndUpdate({ title }, { description })

    // if(title !== noteUpdate.title){
    //     return res.status(500).json({
    //         message: 'Title not found.'
    //     })
    // }

    res.status(201).json({
        message: 'Note updated successfully.'
    })
}
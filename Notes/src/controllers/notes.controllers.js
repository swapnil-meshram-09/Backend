import notesModel from '../models/notes.model.js'

export async function create(req, res){
    const { title, description } = req.body

    if(!title || !description){
        return res.status(409).json({
            message: 'Title or description is missing.'
        })
    }

    const data = await notesModel.create({
        title: title,
        description: description
    })

    res.status(201).json({
        message: 'Notes created successfully.',
        notes: notes
    })
}

export async function gets(){

}
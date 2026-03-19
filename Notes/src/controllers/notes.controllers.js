import notesModel from '../models/notes.model.js'

export async function create(req, res){
    const { title, description } = req.body

    if(!title && !description ){
        return res.status(409).json({
            message: 'Title & description both are missing.'
        })
    }

    if(!title){
        return res.status(409).json({
            message: 'Title is missing.'
        })
    }

    if(!description){
        return res.status(409).json({
             message: 'Desciption is missing.'
        })
    }

    const notes = await notesModel.create({
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
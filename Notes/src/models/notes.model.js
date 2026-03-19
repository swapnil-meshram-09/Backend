import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, 'Title is required.']
        },

        description: {
            type: String,
            required: [true, 'Description is required.']
        }
    },
    { timestamps: true }
)

const notesModel = mongoose.model('notes', noteSchema)

export default notesModel
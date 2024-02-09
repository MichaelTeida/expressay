import { Schema, model, models } from 'mongoose'


const EntrySchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    entry: {
        type: String,
        required: [true, 'Prompt is required']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required']
    }
})

const Entry = models.Entry || model('Entry', EntrySchema)

export default Entry
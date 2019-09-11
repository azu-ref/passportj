const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const movieSchema = new Schema({
    id: ObjectId,
    title: String,
    year: Number,
    cover: { type: String, default: '' },
    description: { type: String, default: '' },
    duration: Number,
    contentRating: String,
    source: String,
    tags: [String]
}, { versionKey: false })

const Movie = mongoose.model('movie', movieSchema)


module.exports = Movie

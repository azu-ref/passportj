const { Schema, model } = require('mongoose')
const userMovies = require('../utils/schemas/userMovies')

const userMovieSchema = new Schema(userMovies, { versionKey: false })

const userMovie = model('user-movie', userMovieSchema)

module.exports = userMovie

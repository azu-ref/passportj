const mongoose = require('mongoose')

const { config } = require('../config/index')
const Movie = require('../models/movie')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName
const DB_HOST = config.dbHost
const DB_PORT = config.dbPort

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?ssl=true&authSource=admin&retryWrites=true`;

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, function (error) {
    if(error) throw new Error('No ha sido posible conectar a la base de datos')

    console.log('Successfully connected')
})

async function getAll(query) {
    const movies = await Movie.find(query)
    // console.log(movies)
    return movies
}

async function getById(id) {
    const movie = await Movie.findById(id)
    // const movie = typeof(id)
    return movie
}

async function create(info) {
    const movie = new Movie(info)
    const result = await movie.save()

    // console.log(result._id)
    return result._id
}

async function update(id, info) {
    const movie = await Movie.findByIdAndUpdate(id, info)
    
    return movie._id
}

async function deleteOne (id) {
    const movie = await Movie.findByIdAndDelete(id)

    return movie._id
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteOne
}

        

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

async function getAll() {
    const movies = await Movie.find((err, Movies) => {
        if(err) throw err
        return Movies
    })
    console.log(movies)
    return movies
}

// async function save() {
//     const movie = new Movie({
//         title: 'Perro',
//         year: 24,
//         cover: 'fsdnsdcndscdsc',
//         description: 'sdsfsdfhdsnfhdnsfhsndhfdf',
//         duration: 1232,
//         contentRating: 'R',
//         source: 'asdsadsaddsadadad',
//         tags: ['ss', 'dsda']
//         })

//     const result = await movie.save()
//     console.log(result)
//     return result
// }

module.exports = {
    getAll,
}

        

// const { moviesMock } = require('../utils/mocks/movies') 
const MongoLib = require('../lib/mongo')
const Movie = require('../models/movie')

class MoviesService {
    async getMovies({ tags }) {
        // const movies = await Promise.resolve(moviesMock)
        const query = tags && { tags: { $in: tags } };
        const movies = await MongoLib.getAll(Movie, query)
        return movies || []
    }
    
    async getMovie(data) {
        const movie = await MongoLib.getById(Movie, data.id)
        return movie || {}
    }

    async createMovie(data) {
        const createMovieId = await MongoLib.create(Movie, data.movie)
        return createMovieId
    }
    
    async updateMovie({ id, movie}) {
        const updateMovieId = await MongoLib.update(Movie, id, movie)
        return updateMovieId
    }
    
    async deleteMovie({ id }) {
        const deleteMovieId = await MongoLib.deleteOne(Movie, id)
        return deleteMovieId
    }
}

module.exports = MoviesService
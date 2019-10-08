// const { moviesMock } = require('../utils/mocks/movies') 
const MongoLib = require('../lib/mongo')

class MoviesService {
    async getMovies({ tags }) {
        // const movies = await Promise.resolve(moviesMock)
        const query = tags && { tags: { $in: tags } };
        const movies = await MongoLib.getAll(query)
        return movies || []
    }
    
    async getMovie(data) {
        const movie = await MongoLib.getById(data.id)
        return movie || {}
    }

    async createMovie(data) {
        const createMovieId = await MongoLib.create(data.movie)
        return createMovieId
    }
    
    async updateMovie({ id, movie}) {
        const updateMovieId = await MongoLib.update(id, movie)
        return updateMovieId
    }
    
    async deleteMovie({ id }) {
        const deleteMovieId = await MongoLib.deleteOne(id)
        return deleteMovieId
    }
}

module.exports = MoviesService
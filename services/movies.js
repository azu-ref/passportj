// const { moviesMock } = require('../utils/mocks/movies') 
const Mongo = require('../lib/mongo')

class MoviesService {
    async getMovies({ tags }) {
        // const movies = await Promise.resolve(moviesMock)
        const query = tags && { tags: { $in: tags } };
        const movies = await Mongo.getAll(query)
        return movies || []
    }
    
    async getMovie(data) {
        const movie = await Mongo.getById(data.id)
        return movie || {}
    }

    async createMovie(data) {
        const createMovieId = await Mongo.create(data.movie)
        return createMovieId
    }
    
    async updateMovie({ id, movie}) {
        const updateMovieId = await Mongo.update(id, movie)
        return updateMovieId
    }
    
    async deleteMovie({ id }) {
        const deleteMovieId = await Mongo.deleteOne(id)
        return deleteMovieId
    }
}

module.exports = MoviesService
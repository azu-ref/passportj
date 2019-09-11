const { moviesMock } = require('../utils/mocks/movies') 
const Mongo = require('../lib/mongo')

class MoviesService {
    async getMovies() {
        // const movies = await Promise.resolve(moviesMock)
        const movies = await Mongo.getAll()
        return movies || []
    }

    // async save() {
    //     const savedExample = await Mongo.save()
    //     return savedExample
    // }
    
    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0])
        return movie || {}
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMock[0].id)
        return createMovieId
    }
    
    async updateMovie() {
        const updateMovieId = await Promise.resolve(moviesMock[0].id)
        return updateMovieId
    }
    
    async deleteMovie() {
        const deleteMovieId = await Promise.resolve(moviesMock[0].id)
        return deleteMovieId
    }
}

module.exports = MoviesService
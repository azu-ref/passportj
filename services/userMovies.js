const MongoLib = require('../lib/mongo')
const UserMovie = require('../models/userMovie')

class UserMoviesService {
    constructor() {
        this.collection = UserMovie
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId }
        const userMovies = await MongoLib.getAll(this.collection, query)

        return userMovies || []
    }

    async createUserMovie({ userMovie }) {
        const createUserMovieId = await MongoLib.create(this.collection, userMovie)

        return createUserMovieId
    }

    async deleteUserMovie({ userMovieId }) {
        const deleteUserMovieId = await MongoLib.deleteOne(this.collection, userMovieId)

        return deleteUserMovieId
    }
}

module.exports = UserMoviesService
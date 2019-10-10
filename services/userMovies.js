const MongoLib = require('../lib/mongo')
const UserMovie = require('../models/userMovie')

class UserMoviesService {
    constructor() {
        this.collection = UserMovie
    }

    async getUserMovies({ userId }) {

    }

    async createUserMovie({ userMovie }) {

    }

    async deleteUserMovie({ userMovieId }) {
        
    }
}
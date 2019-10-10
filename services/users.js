const MongoLib = require('../lib/mongo')
const User = require('../models/user')
const bcrypt = require('bcrypt')

class UsersService {
    constructor() {
        this.collection = User

    }

    async getUser({ email }) {
        const  [ user ] = await MongoLib.getAll(this.collection, email)
        return user
    }

    async createUser(user) {
        const { name, email, password } = user
        const hashedPassword = await bcrypt.hash(password, 10)

        const createUserId =  await MongoLib.create(this.collection, {
            name,
            email,
            password: hashedPassword
        })

        return createUserId
    }
}

module.exports = UsersService
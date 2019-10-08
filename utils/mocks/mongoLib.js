const sinon = require('sinon')

const { moviesMock, filteredMoviesMocks } = require('./movies')

const getAllStub = sinon.stub()
getAllStub.resolves(moviesMock)

const tagQuery = { tags: { $in: ['Drama'] }}
getAllStub.withArgs(tagQuery).resolves(filteredMoviesMocks('Drama'))

const createStub = sinon.stub().resolves(moviesMock[0].id)

const MongoLibMock = {
    getAll: (query) => {
        return getAllStub(query)
    },

    create: (data) => {
        return createStub(data)
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
}
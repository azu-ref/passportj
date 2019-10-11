const { Schema, model } = require('mongoose')

const apiKey = new Schema({
    token: String,
    scopes: [String]
}, { versionKey: false })

const ApiKey = model('api-keys', apiKey)

module.exports = ApiKey
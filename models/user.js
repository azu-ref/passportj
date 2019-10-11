const mongoose = require('mongoose')
const { createUserSchema } = require('../utils/schemas/users')

const Schema = mongoose.Schema

const userSchema= new Schema(createUserSchema, { versionKey: false })

const User = mongoose.model('users', userSchema)

module.exports = User
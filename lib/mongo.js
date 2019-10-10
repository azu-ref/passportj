const mongoose = require('mongoose')

const { config } = require('../config/index')
const Movie = require('../models/movie')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName
const DB_HOST = config.dbHost
const DB_PORT = config.dbPort

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?ssl=true&authSource=admin&retryWrites=true`;

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, function (error) {
    if(error) throw new Error('No ha sido posible conectar a la base de datos')

    console.log('Successfully connected')
})

async function getAll(model ,query) {
    const data = await model.find(query)
    // console.log(movies)
    return data
}

async function getById(model, id) {
    const data = await model.findById(id)
    // const movie = typeof(id)
    return data
}

async function create(model, info) {
    const newData = new model(info)
    const result = await newData.save()

    // console.log(result._id)
    return result._id
}

async function update(model, id, info) {
    const updatedData = await model.findByIdAndUpdate(id, info)
    
    return updatedData._id
}

async function deleteOne (model, id) {
    const deletedData = await model.findByIdAndDelete(id)

    return deletedData._id
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteOne
}

        

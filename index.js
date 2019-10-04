const express = require('express')
const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

const { logErrors, errorHandler } = require('./utils/middlewares/errorHandler')

// body parser 
app.use(express.json())

moviesApi(app)

// error middlewares
app.use(logErrors)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`server listen on port ${config.port}`)
})



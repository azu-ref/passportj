const express = require('express')
const cors = require('cors')

const app = express()

const { config } = require('./config/index')

const authApi = require('./routes/auth')
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovies')

const { 
    logErrors,
    wrapErrors, 
    errorHandler 
} = require('./utils/middlewares/errorHandler')

const notFoundHanler = require('./utils/middlewares/notFoundHandler')

// body parser and cors
app.use(express.json())
app.use(cors())

//Routes
authApi(app)
moviesApi(app)
userMoviesApi(app)

// Cath 404 error
app.use(notFoundHanler) 

// errors middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`server listen on port ${config.port}`)
})



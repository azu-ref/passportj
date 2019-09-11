const express = require('express')
const MoviesService = require('../services/movies')


function moviesApi(app) {
    const router = express.Router()
    app.use('/api/movies', router)

    const moviesService = new MoviesService()

    //trae todas la peliculas o las indicadas el el query de la ruta
    router.get('/', async function(req, res, next) {
        const { tags } = req.query

        try {
            const movies = await moviesService.getMovies({ tags })
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    })

    // router.get('/saved', async function(req, res, next) {
    //     const { tags } = req.query

    //     try {
    //         const movies = await moviesService.save()
    //         res.status(200).json({
    //             data: movies,
    //             message: 'movies listed'
    //         })
    //     } catch (error) {
    //         next(error)
    //     }
    // })


    //trae una pelicula segun el id
    router.get('/:id', async function(req, res, next) {
        const { id } = req.params
        
        try {
            const movie = await moviesService.getMovie({ id })
    
            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            })
        } catch (error) {
            next(error)
        }
    })

    //crea una nueva pelicula
    router.post('/', async function(req, res, next) {
        const { body: movie } = req

        try {
            const createMovieId = await moviesService.createMovie({ movie })
            res.status(201).json({
                data: createMovieId,
                message: 'movies created'
            })
        } catch (error) {
            next(error)
        }
    })

    //actualiza una pelicula segun el id
    router.put('/:id', async function(req, res, next) {
        const { id } = req.params
        const { body: movie } = req

        try {
            const updatedMovieId = await moviesService.updateMovie({ id, movie })
            res.status(200).json({
                data: updatedMovieId,
                message: 'Movie updated'
            })
        } catch (error) {
            next(error)
        }
    })

    //elimina una pelicula segun el id
    router.delete('/:id', async function(req, res, next) {
        const { id } = req.params

        try {
            const deletedMovieId = await moviesService.deleteMovie({ id })

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        } catch (error) {
            next(error)
        }
    })

    router.patch('/:id', async function(req, res, next) {
        const { id } = req.params
        const { body: movie } = req

        try {
            const partialUpdateMovieId = await moviesService.updateMovie({ movie, id})

            res.status(200).json({
                data: partialUpdateMovieId,
                message: 'Movie updated partially'
            })
        } catch (error) {
            next(error)
        }
    })
}

module.exports = moviesApi
const router = require('express').Router()
const Movies = require('../model/Movies')

router.get('/movies', async (req, res) => {
    let orderOption = []
    let { order, option, offset } = req.query

    if (order == undefined) orderOption.push("movies")
    else orderOption.push(order)
    if (option == "DESC") orderOption.push("DESC")
    if (offset != undefined && !isNaN(parseInt(offset))) offset = parseInt(offset)
    else offset = 0

    try {
        res.status(200).json({
            status: 'Success',
            message: 'Success',
            data: await Movies.findAll({ offset: offset, limit: 100, order: [orderOption], attributes: ['id', 'movies', 'one_line'] })
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
})

router.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movies.findByPk(req.params.id)
        if (movie !== null) return res.status(200).json({
            status: 'Success',
            message: 'Success',
            data: movie
        })

        return res.status(404).json({
            status: 'Not Found',
            message: `Movie with ID ${req.params.id} Not Found`
        })

    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
})

router.post('/movies', async (req, res) => {
    const { movies } = req.body

    try {
        try {
            if (movies != undefined) {
                const checkMovie = await Movies.findOne({ where: { movies: movies } })
                if (checkMovie != null) {
                    return res.status(400).json({ status: 'Bad Request', message: "Movie Title is already exist" })
                }
            }

            const newMovie = await Movies.create(req.body)
            return res.status(201).json({
                status: 'Success',
                message: 'Success',
                data: newMovie
            })
        } catch (error) {
            return res.status(400).json({ status: 'Bad Request', message: error.message })
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: error.message,
        })
    }
})

router.patch('/movies/:id', async (req, res) => {
    const { movies } = req.body
    try {
        if (req.params.id == undefined) throw Error("Movie ID is not specified")
        try {

            let movie = await Movies.findByPk(req.params.id)
            if (movie == null) return res.status(404).json({
                status: 'Not Found',
                message: `Movie with ID ${req.params.id} Not Found`
            })

            if (movies != undefined) {
                const checkMovie = await Movies.findOne({ where: { movies: movies } })
                if (checkMovie != null) {
                    return res.status(400).json({ status: 'Bad Request', message: "Movie Title is already exist" })
                }
            }

            await movie.update(req.body)
            return res.status(200).json({
                status: 'Success',
                message: 'Success',
                data: movie
            })

        } catch (error) {
            res.status(400).json({ status: 'Bad Request', message: error.message })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: error.message,
        })
    }
})

router.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movies.findByPk(req.params.id)

        if (movie == null) return res.status(404).json({
            status: 'Not Found',
            message: `Movie with ID ${req.params.id} Not Found`
        })

        movie.destroy()

        return res.status(200).json({
            status: 'Success',
            message: 'Success'
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ status: 'Bad Request', message: error.message })
    }
})

module.exports = router
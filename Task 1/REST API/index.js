const express = require('express')
const PSql = require('./model/connection')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const MoviesRouter = require('./Controller/MoviesController')
const Movies = require('./model/Movies')
const moviesSeed = require('./model/seeding/moviesSeeding')

app.use('/api/v1/', MoviesRouter)

connectDatabse()

app.listen(3000, () => {
    console.log('Listening to port 3000')
})

function connectDatabse() {
    PSql.authenticate()
        .then(async () => {
            console.log('Connected to databse')
            await PSql.sync({ alter: true, force: true })
            await seedDatabase(moviesSeed)
        })
        .catch(error => {
            console.log(error)
            console.log("\nTrying to reconnect in 5 seconds...")
            setTimeout(connectDatabse, 5000)
        });
}

async function seedDatabase(seedQuery) {
    try {
        const moviesCount = await Movies.findAndCountAll({ limit: 1 })
        if (moviesCount.count === 0) await PSql.query(seedQuery)
    } catch (error) {
        return console.log(error)
    }
}
function cloneArray(array) {
    return [...array]
}
module.exports = { seedDatabase, connectDatabse, cloneArray }
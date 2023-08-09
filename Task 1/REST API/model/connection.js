const { Sequelize } = require('sequelize')
const { PSQL_DBNAME, PSQL_HOST, PSQL_PASSWORD, PSQL_USER } = require('../config/config')

const PSql = new Sequelize(PSQL_DBNAME, PSQL_USER, PSQL_PASSWORD, {
    host: PSQL_HOST,
    dialect: 'postgres',
    logging: false
})

module.exports = PSql
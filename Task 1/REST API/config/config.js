require('dotenv').config()

module.exports = {
    PSQL_USER: process.env.PSQL_USER || 'postgres',
    PSQL_PASSWORD: process.env.PSQL_PASSWORD || 'supersecret',
    PSQL_DBNAME: process.env.PSQL_DBNAME || 'postgres',
    PSQL_HOST: process.env.PSQL_HOST || 'localhost',
    PSQL_PORT: process.env.PSQL_PORT || 5432
}
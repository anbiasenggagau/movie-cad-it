const { DataTypes } = require('sequelize')
const PSql = require('./connection')

const Movies = PSql.define('movie', {
    movies: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    year: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    genre: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rating: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    one_line: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stars: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    votes: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    runtime: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    gross: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    timestamps: false
})

module.exports = Movies
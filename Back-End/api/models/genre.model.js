const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Genre = sequelize.define(
    'genre',
    {
        genre_name: {
            type: DataTypes.STRING,
            unique: true
        },
    },
)


module.exports = Genre
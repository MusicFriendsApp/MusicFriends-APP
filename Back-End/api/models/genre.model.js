const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Genre = sequelize.define(
    'genre',
    {
        genre_name: {
            type: DataTypes.STRING,
        },
        artist_id: {
            type: DataTypes.STRING,
        },
    },

)


module.exports = Genre
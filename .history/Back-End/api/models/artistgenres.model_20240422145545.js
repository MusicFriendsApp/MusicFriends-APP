const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const ArtistGenres = sequelize.define(
    'artistgenres',
    {
        artist_id: {
            type: DataTypes.INTEGER,
        },
        genres_id: {
            type: DataTypes.INTEGER,
        },
    },

)


module.exports = ArtistGenres
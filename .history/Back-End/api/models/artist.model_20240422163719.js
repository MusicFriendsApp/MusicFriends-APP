const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Artist = sequelize.define(
    'artist',
    {
        artist_name: {
            type: DataTypes.STRING,
        },
        spotify_id: {
            type: DataTypes.STRING,
        },
    },

)


module.exports = Artist
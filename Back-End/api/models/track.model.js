const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Track = sequelize.define(
    'track',
    {
        track_name: {
            type: DataTypes.STRING,
        },
        artist_id: {
            type: DataTypes.STRING,
        },
        spotify_id: {
            type: DataTypes.STRING,
        },
    },

)


module.exports = Track
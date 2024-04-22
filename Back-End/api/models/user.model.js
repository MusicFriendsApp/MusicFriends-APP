const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    'user',
    {
        username: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        spotify_id: {
            type: DataTypes.STRING,
        },
        profile_picture: {
            type: DataTypes.STRING,
        },
        tracks_id: {
            type: DataTypes.STRING,
        },
        artist_id: {
            type: DataTypes.STRING,
        },
        genres_id: {
            type: DataTypes.STRING,
        },
    },

)


module.exports = User
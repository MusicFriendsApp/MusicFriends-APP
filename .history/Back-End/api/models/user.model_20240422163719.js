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
    },

)


module.exports = User
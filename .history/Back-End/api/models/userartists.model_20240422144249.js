const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const UserArtist = sequelize.define(
    'userartist',
    {
        user_id: {
            type: DataTypes.INTEGER,
        },
        artist_id: {
            type: DataTypes.INTEGER,
        },
    },

)


module.exports = UserArtist
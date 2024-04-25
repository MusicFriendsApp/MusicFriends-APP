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
            type: DataTypes.INTEGER,
            unique: true,
        },
        profile_picture_sm: {
            type: DataTypes.TEXT,
        },
        profile_picture_bg: {
            type: DataTypes.TEXT,
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user'
        }
    },

)


module.exports = User
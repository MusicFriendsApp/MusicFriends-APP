const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const UserGenres = sequelize.define(
    'usergenres',
    {
        user_id: {
            type: DataTypes.INTEGER,
        },
        gener_id: {
            type: DataTypes.INTEGER,
        },
    },

)


module.exports = UserGenres
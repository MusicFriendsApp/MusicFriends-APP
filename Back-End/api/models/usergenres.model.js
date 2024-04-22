const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const UserGenres = sequelize.define(
    'usergenres',
    {

    },

)


module.exports = UserGenres
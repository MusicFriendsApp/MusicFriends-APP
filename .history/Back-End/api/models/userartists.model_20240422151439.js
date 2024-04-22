const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const UserArtist = sequelize.define(
    'userartist',
    {

    },

)


module.exports = UserArtist
const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const ArtistGenres = sequelize.define(
    'artistgenres',
    {

    },

)


module.exports = ArtistGenres
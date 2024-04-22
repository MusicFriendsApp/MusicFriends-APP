const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const ArtistTracks = sequelize.define(
    'artisttracks',
    {
      
    },

)


module.exports = ArtistTracks
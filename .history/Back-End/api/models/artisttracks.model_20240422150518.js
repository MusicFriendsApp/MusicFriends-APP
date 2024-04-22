const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const ArtistTracks = sequelize.define(
    'artisttracks',
    {
        artist_id: {
            type: DataTypes.INTEGER,
        },
        track_id: {
            type: DataTypes.INTEGER,
        },
    },

)


module.exports = ArtistTracks
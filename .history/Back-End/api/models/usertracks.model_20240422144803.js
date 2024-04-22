const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const UserTracks = sequelize.define(
    'usertracks',
    {
        user_id: {
            type: DataTypes.INTEGER,
        },
        track_id: {
            type: DataTypes.INTEGER,
        },
    },

)


module.exports = UserTracks
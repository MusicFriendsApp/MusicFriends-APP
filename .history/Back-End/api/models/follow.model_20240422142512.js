const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Follow = sequelize.define(
    'follow',
    {
        following_user_id: {
            type: DataTypes.INTEGER,
        },
        followed_user_id: {
            type: DataTypes.INTEGER,
        },
    },

)


module.exports = Follow
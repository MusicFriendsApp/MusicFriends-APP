const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const PostReply = sequelize.define(
    'postreply',
    {
    },

)


module.exports = PostReply
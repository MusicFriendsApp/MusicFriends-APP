const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Post = sequelize.define(
    'post',
    {
        title: {
            type: DataTypes.STRING,
        },
        body: {
            type: DataTypes.TEXT,
        },
    },

)


module.exports = Post
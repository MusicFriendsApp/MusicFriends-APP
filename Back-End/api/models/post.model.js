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
        parentId: {
            type: DataTypes.INTEGER,
        }
    },

)


module.exports = Post
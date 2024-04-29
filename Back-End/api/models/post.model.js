const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Post = sequelize.define(
    'post',
    {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        parentId: {
            type: DataTypes.STRING,
        },
    }

)


module.exports = Post
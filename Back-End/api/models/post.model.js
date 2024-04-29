const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Post = sequelize.define(
    'post',
    {
        body: {
            type: DataTypes.TEXT,
        },
        userId: {
            type: DataTypes.STRING,
        },
        parentId: {
            type: DataTypes.STRING,
        },
    },
    {
      timestamps: true,
    }

)


module.exports = Post
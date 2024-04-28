const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Post = sequelize.define(
    'post',
    {
        body: {
            type: DataTypes.TEXT,
        },
        parentId: {
            type: DataTypes.INTEGER,
        },
    },
    {
      timestamps: true,
    }

)


module.exports = Post
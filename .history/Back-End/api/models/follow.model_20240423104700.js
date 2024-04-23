const { sequelize } = require('../../database/index.js');
const { DataTypes } = require('sequelize');

const Follow = sequelize.define(
    'follow',
)


module.exports = Follow
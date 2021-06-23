const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/index.js');

const Photos = sequelize.define('Photos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  styleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thumbnail_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Photos.sync({ alter: true });

module.exports.Photos = Photos;

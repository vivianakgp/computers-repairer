// sequelize obj configuration
const { db } = require('../utils/database');
const { DataTypes } = require('sequelize');

const Repair = db.define(
  'repair',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      //defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    computerNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      defaultValue: 'pending',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
module.exports = { Repair };

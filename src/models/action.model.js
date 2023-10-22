const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');

const ActionModel = sq.define('actions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  success: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
ActionModel.sync().then(() => {
  console.log('Action Model synced');
});

module.exports = ActionModel;

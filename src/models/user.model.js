const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');

const UserModel = sq.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
UserModel.sync().then(() => {
  console.log('User Model synced');
});

module.exports = UserModel;

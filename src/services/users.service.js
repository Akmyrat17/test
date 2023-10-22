const ActionService = require('./action.service');
const UserModel = require('../models/user.model');
exports.createUser = async function (username, email, password) {
  const user = await UserModel.create({
    username,
    email,
    password,
  });
  user.save();
  await ActionService.create(user.id, new Date(), 'create', 1);
  return user;
};

exports.update = async function (username, email, password, id) {
  const user = await UserModel.update(
    {
      username,
      password,
      email,
    },
    {
      where: { id },
    }
  );
  await ActionService.create(id, new Date(), 'update', 1);
  return user;
};

exports.findAll = async function (id) {
  const users = await UserModel.findAll();
  await ActionService.create(id, new Date(), 'getAll', 1);
  return users;
};

exports.findById = async function (id) {
  const user = await UserModel.findByPk(id);
  return user;
};

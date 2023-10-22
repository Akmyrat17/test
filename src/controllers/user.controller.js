var UserService = require('../services/users.service');
exports.createUser = async function (req, res) {
  const { username, email, password } = req.body;
  try {
    const user = await UserService.createUser(username, email, password);
    return res.status(201).json({
      status: 201,
      data: user,
      message: 'Succesfully created',
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error,
    });
  }
};
exports.updateUser = async function (req, res, next) {
  const id = parseInt(req.params.id);
  const { username, email, password } = req.body;
  try {
    const user = await UserService.update(username, email, password, id);
    return res.status(200).json({
      status: 200,
      data: {
        username,
        email,
        password,
        id,
      },
      message: 'Succesfully updated',
    });
  } catch (error) {
    return next(error);
  }
};

exports.getAll = async function (req, res) {
  const { id } = req.params;
  const users = await UserService.findAll(id);
  return res.status(200).json({
    status: 200,
    data: users,
    message: 'Succesfully retrieved all',
  });
};

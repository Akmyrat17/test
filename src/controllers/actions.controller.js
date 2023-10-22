const UserService = require('../services/users.service');
const ActionService = require('../services/action.service');
exports.findAll = async function (req, res) {
  const { user_id, page, page_size } = req.query;
  const user = await UserService.findById(user_id);
  const limit = page_size;
  const offset = page * page_size;
  const actions = await ActionService.getAll(user_id, limit, offset);
  return res.status(200).json({
    total: actions[0],
    rows: actions[1],
  });
};

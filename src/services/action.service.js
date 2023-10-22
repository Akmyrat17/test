const ActionModel = require('../models/action.model');
const { sq } = require('../config/db');

exports.create = async function (user_id, date, action, success) {
  const newAction = await ActionModel.create({
    user_id,
    time: date,
    action,
    success,
  });
  newAction.save();
  console.log(newAction);
  if (newAction) return true;
  return false;
};
exports.getAll = async function (user_id, limit, offset) {
  const [rowCount, rows] = await sq.query(
    `SELECT COUNT(*) AS total,
*
FROM actions
WHERE user_id = ${user_id}
Group by id
ORDER BY id DESC`
  );
  return [rows.rowCount, rows.rows];
};

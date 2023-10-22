const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
router.get('/:id/', UserController.getAll);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.updateUser);

module.exports = router;

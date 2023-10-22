const express = require('express');
const router = express.Router();
const ActionController = require('../controllers/actions.controller');

router.get('/', ActionController.findAll);

module.exports = router;

const router = require('express').Router();
const userController = require('../controllers/users');

router.route('api/users')
  .get(userController.index)
  .post(userController.create);

module.exports = router;
const router = require('express').Router();

const userController = require('./controller/UserController');
router.get('/user', userController.getUsers);
router.post('/user', userController.saveUser);

module.exports = router;
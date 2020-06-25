const router = require('express').Router();

const userController = require('./controller/UserController');
router.get('/user/:id', userController.getUsers);
router.post('/user', userController.saveUser);

module.exports = router;
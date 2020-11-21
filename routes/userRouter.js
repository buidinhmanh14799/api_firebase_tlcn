var express = require('express');
var router = express.Router();

var userController =  require('../src/controllers/userController');

router.post('/create', userController.createUser);
router.post('/update/:id', userController.updateUser);
router.post('/disable/:id',userController.disableUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/', userController.listAllUserAuthen);
router.get('/email/:id', userController.GetUserbyEmail);
router.get('/phone/:id', userController.GetUserbyPhone);
router.get('/uid/:id', userController.GetUserbyUid);

// router.get('/login', userController.LoginEmail);


module.exports = router;
var express = require('express');
var router = express.Router();

var userController =  require('../src/controllers/userController');


router.get('/', userController.listAllUserAuthen);
router.post('/create', userController.createUser);
router.post('/update/:id', userController.updateUser);
router.post('/disable/:id',userController.disableUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/email/:id', userController.GetUserbyEmail);
router.get('/phone/:id', userController.GetUserbyPhone);
router.get('/uid/:id', userController.GetUserbyUid);

router.post('/checkemail',userController.checkEmail)

router.get('/firestore/:uid', userController.GetUserFireStore);
router.get('/expirationDate/:uid', userController.GetDateExpiration);
router.put('/disable/:uid', userController.DisabledUser);
router.put('/enable/:uid', userController.EnableUser);

router.get('/firestore/checkNewData/:uid', userController.CheckNewData);
// router.get('/login', userController.LoginEmail);



module.exports = router;
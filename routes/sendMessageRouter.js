var express = require('express');
var router = express.Router();

var messageController =  require('../src/controllers/sendMessageController');

router.post('/send/package', messageController.sendMessagePackage);
router.post('/send/voca', messageController.sendMessageVoca);
router.post('/send/admin', messageController.sendMessageAdmin);

module.exports = router;
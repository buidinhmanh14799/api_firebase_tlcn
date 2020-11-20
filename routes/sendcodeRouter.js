var express = require('express');
var router = express.Router();
const sencode = require('../src/controllers/sendcodeController');

router.post('/', sencode.sendmail);

module.exports = router;
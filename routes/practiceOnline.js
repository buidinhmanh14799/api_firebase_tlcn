var express = require('express');
var router = express.Router();
const controller = require('../src/controllers/practiceOnlineController');

router.get('/data/:id', controller.GetDataPractice);
router.post('/data', controller.AddPractice);
router.post('/data_json', controller.AddPracticeJson);

router.get('/list', controller.GetListPractice); // list all

router.get('/listhistory', controller.GetListPracticeHistory); // list history

router.get('/listcomming', controller.GetListPracticeComming); // list comming

router.post('/result', controller.Result);
router.get('/result/:id', controller.GetResult);

router.delete('/data', controller.DeletePracticeOnline);

module.exports = router;
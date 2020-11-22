var express = require('express');
var router = express.Router();
const controller = require('../src/controllers/databaseController');

router.post('/part1/add', controller.AddPart1);
router.post('/part2/add', controller.AddPart2);
router.post('/part3/add', controller.AddPart3);
router.post('/part4/add', controller.AddPart4);
router.post('/part5/add', controller.AddPart5);
router.post('/part6/add', controller.AddPart6);
router.post('/part7/add', controller.AddPart7);


router.get('/part1', controller.GetDataPart1);
router.get('/part2', controller.GetDataPart2);
router.get('/part3', controller.GetDataPart3);
router.get('/part4', controller.GetDataPart4);
router.get('/part5', controller.GetDataPart5);
router.get('/part6', controller.GetDataPart6);
router.get('/part7', controller.GetDataPart7);


module.exports = router;
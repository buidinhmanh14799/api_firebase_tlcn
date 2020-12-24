var express = require('express');
var router = express.Router();
const controller = require('../src/controllers/databaseController');


//database

router.post('/part1/add', controller.AddPart1);
router.post('/part2/add', controller.AddPart2);
router.post('/part3/add', controller.AddPart3);
router.post('/part4/add', controller.AddPart4);
router.post('/part5/add', controller.AddPart5);
router.post('/part6/add', controller.AddPart6);
router.post('/part7/add', controller.AddPart7);
router.post('/part3detail/add', controller.AddPart3Detail);
router.post('/part4detail/add', controller.AddPart4Detail);
router.post('/part6detail/add', controller.AddPart6Detail);
router.post('/part7detail/add', controller.AddPart7Detail);
router.post('/year/add', controller.AddYear);
router.post('/test/add', controller.AddTest);
router.post('/vocabulary/add', controller.AddVocabulary);

router.get('/part1', controller.GetDataPart1);
router.get('/part1/:uid', controller.GetDataPart1ByUid);

router.get('/part2', controller.GetDataPart2);
router.get('/part2/:uid', controller.GetDataPart2ByUid);

router.get('/part3', controller.GetDataPart3);
router.get('/part3/:uid', controller.GetDataPart3ByUid);

router.get('/part4', controller.GetDataPart4);
router.get('/part4/:uid', controller.GetDataPart4ByUid);

router.get('/part5', controller.GetDataPart5);
router.get('/part5/:uid', controller.GetDataPart5ByUid);

router.get('/part6', controller.GetDataPart6);
router.get('/part6/:uid', controller.GetDataPart6ByUid);

router.get('/part7', controller.GetDataPart7);
router.get('/part7/:uid', controller.GetDataPart7ByUid);

router.get('/part3detail', controller.GetDataPart3Detail);
router.get('/part3detail/:uid', controller.GetDataPart3DetailByUid);

router.get('/part4detail', controller.GetDataPart4Detail);
router.get('/part4detail/:uid', controller.GetDataPart4DetailByUid);

router.get('/part6detail', controller.GetDataPart6Detail);
router.get('/part6detail/:uid', controller.GetDataPart6DetailByUid);

router.get('/part7detail', controller.GetDataPart7Detail);
router.get('/part7detail/:uid', controller.GetDataPart7DetailByUid);

router.get('/year', controller.GetDataYear);

router.get('/test', controller.GetDataTest);
router.get('/test/:uid', controller.GetDataTestByUid);

router.get('/vocabulary', controller.GetDataVocabulary);

module.exports = router;
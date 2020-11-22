var admin = require("firebase-admin");

var serviceAccount = require("./service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://toeic-seb.firebaseio.com"
});

exports.admin = admin;
exports.admindb = admin.firestore().collection('users');
exports.admindbPart1 = admin.firestore().collection('DataBase').doc('Part1');
exports.admindbPart2 = admin.firestore().collection('DataBase').doc('Part2');
exports.admindbPart3 = admin.firestore().collection('DataBase').doc('Part3');
exports.admindbPart4 = admin.firestore().collection('DataBase').doc('Part4');
exports.admindbPart5 = admin.firestore().collection('DataBase').doc('Part5');
exports.admindbPart6 = admin.firestore().collection('DataBase').doc('Part6');
exports.admindbPart7 = admin.firestore().collection('DataBase').doc('Part7');

exports.admindbPart3Detail = admin.firestore().collection('DataBase').doc('Part3Detail');
exports.admindbPart4Detail = admin.firestore().collection('DataBase').doc('Part4Detail');
exports.admindbPart6Detail = admin.firestore().collection('DataBase').doc('Part6Detail');
exports.admindbPart7Detail = admin.firestore().collection('DataBase').doc('Part7Detail');
var admin = require("firebase-admin");

var serviceAccount = require("./service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://toeic-seb.firebaseio.com"
});

exports.admin = admin;
exports.admindb = admin.firestore().collection('users');
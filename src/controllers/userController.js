const { admin, admindb } = require('../firebase/firebase-confix');



exports.createUser = (req, res) => {
    admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        displayName: req.body.displayName,
        photoURL: req.body.photoURL,
        disabled: false
    })
        .then((user) => {
            console.log("password:", user.email);
            admindb.doc(user.uid)
                .set(req.body)
                .then(() => {
                    res.send(user);
                })
                .catch(err => res.status(500).send(err))
        }).catch(err => {
            res.status(500).send(err);
        })
}

exports.updateUser = (req, res) => {
    admin.auth().updateUser(req.params.id, {
        email: req.body.email,
        emailVerified: false,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        displayName: req.body.displayName,
        photoURL: req.body.photoURL,
        disabled: false
    }).then(user => {
        admindb.doc(user.uid)
            .set(req.body)
            .then(() => {
                res.send(user);
            })
            .catch(err => res.status(500).send(err))
    }).catch(err => {
        res.status(500).send(err);
    })
}

exports.disableUser = (req, res) => {
    admin.auth().updateUser(req.params.id, {
        disabled: true
    }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send(err);
    })
}

exports.deleteUser = (req, res) => {
    admin.auth.deleteUser(req.params.id)
        .then(() => {
            res.send("delete compelete!");
        }).catch(err => {
            res.send(err);
        })
}

exports.listAllUserAuthen = (req, res) => {
    var arr = [];
    admin.auth().listUsers(1000)
        .then(listUserResult => {
            listUserResult.users.forEach(userRecord => {
                arr.push(userRecord)
            });
            if (listUserResult.pageToken) {
                this.listAllUser(listUserResult.pageToken);
            }
            res.send(arr);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

exports.GetUserbyEmail = (req, res) => {
    admin.auth().getUserByEmail(req.params.id).then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send(err)
    })
}
exports.GetUserbyUid = (req, res) => {
    admin.auth().getUser(req.params.id).then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send(err)
    })
}
exports.GetUserbyPhone = (req, res) => {
    admin.auth().getUserByPhoneNumber(req.params.id).then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send(err)
    })
}
exports.GetUserFireStore = (req, res) => {
    admindb.doc(req.params.uid).get().then(user => {
        res.send(user._fieldsProto)
    }).catch(err => {
        res.status(500).send(err);
    })
}
exports.GetDateExpiration = (req, res) => {
    admindb.doc(req.params.uid).get().then(user => {
        var date = user._fieldsProto.expirationDate.timestampValue.seconds;
        console.log(date);
        var datecurrent = new Date();
        var dateTam = new Date(date * 1000 - datecurrent.getTime())
        var result = dateTam.getDate();
        console.log("ngay con lai", result)

        var type = user._fieldsProto.package.stringValue;

        res.json({
            'package': type,
            'Expiration': result
        });

    }).catch(err => {
        res.status(500).send(err);
    })
}
exports.DisabledUser = (req, res) => {
    admin
        .auth()
        .updateUser(req.params.uid, {
            disabled: true,
        })
        .then((userRecord) => {
            res.send(userRecord);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}
exports.EnableUser = (req, res) => {
    admin
        .auth()
        .updateUser(req.params.uid, {
            disabled: false,
        })
        .then((userRecord) => {
            res.send(userRecord);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}




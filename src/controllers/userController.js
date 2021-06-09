const { admin, admindb } = require('../firebase/firebase-confix');



exports.createUser = (req, res) => {
    console.log(req.body.email)
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

exports.listAllUser = (req, res) => {
    console.log('vao');
    const arr = admin.auth().listUsers()
    console.log(arr);
    res.send(arr);
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

exports.listAllUserAuthen = async (req, res) => {
    var arr = [];
    admin.auth().listUsers(1000)
        .then(async (listUserResult) => {
            await Promise.all(listUserResult.users.map(async (userRecord) => {
                const usertam = { ...userRecord };
                console.log(usertam.uid)
                const user = await admindb.doc(usertam.uid).get();
                // const package = user._fieldsProto.package.stringValue;
                // const date = user._fieldsProto.expirationDate.timestampValue.seconds;
                // var datecurrent = new Date();
                // if ((date * 1000 - datecurrent.getTime()) > 0) {
                //     var dateTam = new Date(date * 1000 - datecurrent.getTime())
                //     var result = dateTam.getDate();
                //     usertam.expirationDate = result;
                // } else {
                //     usertam.expirationDate = -1;
                // }
                // usertam.package = package;
                // console.log(usertam.expirationDate);
                arr.push(usertam)

            }));
            res.send(arr);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}
exports.checkEmail = async (req, res) => {
    var arr = [];
    let resultcheck = 0;
    console.log(req.body.email)
    admin.auth().listUsers(1000)
        .then(async (listUserResult) => {
            await Promise.all(listUserResult.users.map(async (userRecord) => {
                const arr1 = { ...userRecord };
                arr.push(arr1);
            }));
            console.log(typeof arr)
            await Promise.all(arr.map(user => {
                if (user.email === req.body.email) {
                    console.log('??', user.email)
                    resultcheck = 1;
                }
            }))
            console.log(resultcheck)
            if (resultcheck === 1) {
                res.status(200).json({
                    success: true,
                });
            } else {
                res.status(500).json({
                    success: false,
                });
            }

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
        var type = user._fieldsProto.package.stringValue;
        var date = user._fieldsProto.expirationDate.timestampValue.seconds;
        console.log(date);
        var datecurrent = new Date();
        if ((date * 1000 - datecurrent.getTime()) > 0) {
            var dateTam = new Date(date * 1000 - datecurrent.getTime())
            var result = dateTam.getDate();
            console.log("ngay con lai", result)
            res.json({
                'package': type,
                'Expiration': result
            });
        } else {
            res.json({
                'package': type,
                'Expiration': -1
            });
        }



    }).catch(err => {
        res.status(500).send(err);
    })
}
exports.CheckNewData = (req, res) => {
    admindb.doc(req.params.uid).get().then(user => {
        var isNew = user._fieldsProto.isNewData.stringValue;
        res.json({
            'isNewData': isNew
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




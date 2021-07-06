const { admin, admindb, admindbRoleAdmin } = require('../firebase/firebase-confix');



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

// exports.listAllUserAuthen = async (req, res) => {
//     var arr = [];
//     admin.auth().listUsers(1000)
//         .then(async (listUserResult) => {
//             await Promise.all(listUserResult.users.map(async (userRecord) => {
//                 const usertam = { ...userRecord };
//                 console.log(usertam.uid)
//                 const user = await admindb.doc(usertam.uid).get();
//                 // const package = user._fieldsProto.package.stringValue;
//                 // const date = user._fieldsProto.expirationDate.timestampValue.seconds;
//                 // var datecurrent = new Date();
//                 // if ((date * 1000 - datecurrent.getTime()) > 0) {
//                 //     var dateTam = new Date(date * 1000 - datecurrent.getTime())
//                 //     var result = dateTam.getDate();
//                 //     usertam.expirationDate = result;
//                 // } else {
//                 //     usertam.expirationDate = -1;
//                 // }
//                 // usertam.package = package;
//                 // console.log(usertam.expirationDate);
//                 arr.push(usertam)

//             }));
//             res.send(arr);
//         })
//         .catch(err => {
//             res.status(500).send(err);
//         })
// }

exports.listAllUserAuthen = async (req, res) => {
    try {
        var arr = [];
        admindb.get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.AddUserAuthenRoleAdmin = async (req, res) => {
    console.log('vao');
    try {
        admin
            .auth()
            .createUser({
                email: req.body.email,
                password: req.body.password,
                displayName: req.body.username,
                photoURL: 'https://firebasestorage.googleapis.com/v0/b/toeic-seb.appspot.com/o/image%2Fuser.png?alt=media&token=e5b3a63e-b683-49a3-b78c-0097b1dabd3c',
                disabled: false,
            })
            .then((userRecord) => {
                var user ={
                    id:userRecord.uid,
                    email: req.body.email,
                    password: req.body.password,
                    displayName: req.body.username,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/toeic-seb.appspot.com/o/image%2Fuser.png?alt=media&token=e5b3a63e-b683-49a3-b78c-0097b1dabd3c',
                    status: true
                }
                admindbRoleAdmin.doc(userRecord.uid).set(user).then(()=>{
                    res.send(
                        {
                            status: true,
                            message: 'add Admin compelete'
                        }
                    );
                });
            })
            .catch((error) => {
                console.log('Error creating new user:', error);
            });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.listAllUserAuthenRoleAdmin = async (req, res) => {
    console.log('vao');
    try {
        var arr = [];
        admindbRoleAdmin.get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });
    } catch (error) {
        res.status(500).send(error);
    }
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
        .then(() => {
            admindb.doc(req.params.uid).update({
                islogin: false
            }).then(() => {
                res.send({
                    status: true,
                    message: 'disable compelete!'
                });
            })

        })
        .catch((error) => {
            res.status(500).send(error);
        });
}
exports.AdminDisabledUser = (req, res) => {
    admin
        .auth()
        .updateUser(req.params.uid, {
            disabled: true,
        })
        .then(() => {
            admindbRoleAdmin.doc(req.params.uid).update({
                status: false
            }).then(() => {
                res.send({
                    status: true,
                    message: 'disable compelete!'
                });
            })

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
            admindb.doc(req.params.uid).update({
                islogin: true
            }).then(() => {
                res.send({
                    status: true,
                    message: 'disable compelete!'
                });
            })
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}
exports.AdminEnableUser = (req, res) => {
    admin
        .auth()
        .updateUser(req.params.uid, {
            disabled: false,
        })
        .then((userRecord) => {
            admindbRoleAdmin.doc(req.params.uid).update({
                status: true
            }).then(() => {
                res.send({
                    status: true,
                    message: 'disable compelete!'
                });
            })
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}




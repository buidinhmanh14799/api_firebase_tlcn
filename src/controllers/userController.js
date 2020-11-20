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
            console.log("password:",user.email);
            admindb.doc(user.uid)
            .set(req.body)
            .catch(err=>res.status(500).send(err))

            res.send(user);
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
        res.send(user);
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

exports.GetUserbyEmail = (req, res)=>{
    admin.auth().getUserByEmail(req.params.id).then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send(err)
    })
}
exports.GetUserbyUid = (req, res)=>{
    admin.auth().getUser(req.params.id).then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send(err)
    })
}
exports.GetUserbyPhone = (req, res)=>{
    admin.auth().getUserByPhoneNumber(req.params.id).then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send(err)
    })
}


const {
    admindbYear,
    admindbTest,
    admindbPart1,
    admindbPart2,
    admindbPart3,
    admindbPart4,
    admindbPart5,
    admindbPart6,
    admindbPart7,
    admindbPart3Detail,
    admindbPart4Detail,
    admindbPart6Detail,
<<<<<<< HEAD
    admindbPart7Detail,
    admindbTest,
    admindbYear } = require('../firebase/firebase-confix');
=======
    admindbPart7Detail, 
    admindb} = require('../firebase/firebase-confix');
>>>>>>> 76ca1e67a276e5ff9f7a5c35c0589c06943930e3

exports.AddYear = (req,res) =>{
    var object = req.body;
    try{
        object.forEach(element=>{
            admindbYear.collection('data').add(element);
        })
        res.send("Add Compelete!");
    }catch(error){
        res.status(500).send(error);
    }
}

exports.AddTest = (req,res) =>{
    var object = req.body;
    try{
        object.forEach(element=>{
            admindbTest.collection('data').add(element);
        })
        res.send("Add Compelete!");
    }catch(error){
        res.status(500).send(error);
    }
}
exports.AddPart1 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart1.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart2 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart2.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart3 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart3.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart4 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart4.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart5 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart5.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart6 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart6.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart7 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart7.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}



exports.AddPart3Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart3Detail.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart4Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart4Detail.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart6Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart6Detail.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddPart7Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart7Detail.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddTest = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbTest.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.AddYear = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbYear.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}



exports.GetDataYear = (req, res) => {
    try {
        var arr = [];
        admindbYear.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataTest = (req, res) => {
    try {
        var arr = [];
        admindbTest.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart1 = (req, res) => {
    try {
        var arr = [];
        admindbPart1.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart2 = (req, res) => {
    try {
        var arr = [];
        admindbPart2.collection('data').get().then(data => {
            data.forEach(element => {

                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart3 = (req, res) => {
    try {
        var arr = [];
        admindbPart3.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart4 = (req, res) => {
    try {
        var arr = [];
        admindbPart4.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart5 = (req, res) => {
    try {
        var arr = [];
        admindbPart5.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart6 = (req, res) => {
    try {
        var arr = [];
        admindbPart6.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart7 = (req, res) => {
    try {
        var arr = [];
        admindbPart7.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}

exports.GetDataPart3Detail = (req, res) => {
    try {
        var arr = [];
        admindbPart3Detail.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart4Detail = (req, res) => {
    try {
        var arr = [];
        admindbPart4Detail.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart6Detail = (req, res) => {
    try {
        var arr = [];
        admindbPart6Detail.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataPart7Detail = (req, res) => {
    try {
        var arr = [];
        admindbPart7Detail.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataYear = (req, res) => {
    try {
        var arr = [];
        admindbYear.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataTest = (req, res) => {
    try {
        var arr = [];
        admindbTest.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}

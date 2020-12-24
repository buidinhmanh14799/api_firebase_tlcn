const {
    admin,
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
    admindbPart7Detail,
    admindbTest,
    admindbYear,
    admindb,
    admindbVocabulary } = require('../firebase/firebase-confix');

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
        object.forEach(async (element) => {
            admindbTest.collection('data').add(element);
            const user = await admindb.get();
            await Promise.all(user.map(elementuser => {
                elementuser.collection('array').add(element);
            }))
        });
        res.send("Add Compelete!");
    } catch (error) {
        console.log(error + '');
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
exports.GetDataPart1ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart1.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart2ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart2.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart3ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart3.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart4ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart4.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart5ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart5.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart6ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart6.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart7ByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart7.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart3DetailByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart3Detail.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart4DetailByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart4Detail.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart6DetailByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart6Detail.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataPart7DetailByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbPart7Detail.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
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
exports.GetDataTestByUid = async (req, res) => {
    try {
        const arrListGet = []
        const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
        arrListGettam.forEach(element => {
            arrListGet.push(element.data());
        });
        var arrResult = [];
        await Promise.all(arrListGet.map(async (element) => {
            const data = await admindbTest.collection('data')
                .where('IDTest', '==', element.IDTest)
                .where('IDYear', '==', element.IDYear)
                .get();
            data.forEach(element2 => {
                arrResult.push(element2.data());
            });
        }))
        res.send(arrResult);
    } catch (error) {
        console.log(error + '')
        res.status(500).send(error);
    }
}
exports.AddVocabulary = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbVocabulary.collection('data').add(element);
        });
        res.send("Add Compelete!");
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.GetDataVocabulary = (req, res) => {
    try {
        var arr = [];
        admindbVocabulary.collection('data').get().then(data => {
            data.forEach(element => {
                arr.push(element.data());
            });
            res.send(arr);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}

exports.DeleteAll = async (req, res) => {
    DeleteCustom('Part1');
    DeleteCustom('Part2');
    DeleteCustom('Part3');
    DeleteCustom('Part4');
    DeleteCustom('Part5');
    DeleteCustom('Part6');
    DeleteCustom('Part7');
    DeleteCustom('Year');
    DeleteCustom('Test');
    DeleteCustom('Vocabulary');
    DeleteCustom('Part3Detail');
    DeleteCustom('Part4Detail');
    DeleteCustom('Part6Detail');
    DeleteCustom('Part7Detail');
    res.send('oke');
}

// exports.DeleteOne = (req, res) => {
//     try {
//         console.log('vao');
//         console.log(req.params.one);
//         var batch = admin.firestore().batch()
//         admin.firestore().collection('DataBase').doc(req.params.one).collection('data').listDocuments().then(val => {
//             val.map((val) => {
//                 batch.delete(val)
//             })
//             batch.commit().then(() => {
//                 res.send('oke');
//             });
//         })
//     } catch (error) {
//         console.log('vaoloi');
//         res.status(500).send(error + '');
//     }
// }
async function DeleteCustom(nameTable) {
    try {
        const batchArray = [];
        batchArray.push(admin.firestore().batch());
        let operationCounter = 0;
        let batchIndex = 0;

        const documentSnapshotArray = await admin.firestore().collection('DataBase').doc(nameTable).collection('data').get();

        documentSnapshotArray.forEach(documentSnapshot => {
            batchArray[batchIndex].delete(documentSnapshot.ref);
            operationCounter++;

            if (operationCounter === 499) {
                batchArray.push(admin.firestore().batch());
                batchIndex++;
                operationCounter = 0;
            }
        });
        await Promise.all(batchArray.map(async (batch) => {
            await batch.commit();
        }))
        res.send('ok');
    } catch (error) {
        res.status(500).send(error + '');
    }
}

exports.DeleteOne = async (req, res) => {
    try {
        const batchArray = [];
        batchArray.push(admin.firestore().batch());
        let operationCounter = 0;
        let batchIndex = 0;

        const documentSnapshotArray = await admin.firestore().collection('DataBase').doc(req.params.one).collection('data').get();

        documentSnapshotArray.forEach(documentSnapshot => {
            batchArray[batchIndex].delete(documentSnapshot.ref);
            operationCounter++;

            if (operationCounter === 499) {
                batchArray.push(admin.firestore().batch());
                batchIndex++;
                operationCounter = 0;
            }
        });
        await Promise.all(batchArray.map(async (batch) => {
            await batch.commit();
        }))
        res.send('ok');
    } catch (error) {
        res.status(500).send(error + '');
    }
}


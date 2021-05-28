const e = require('cors');
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
    admindbVocabulary
} = require('../firebase/firebase-confix');

exports.AddPart1 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart1.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart1 = async (req, res) => {
    // console.log("vao");
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async element => {
            // console.log(element.IDYear);
            await admindbPart1.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(async data => {
                data.forEach(docData => {
                    admindbPart1.collection('data').doc(docData.id).update(element);
                })
            });
            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        // console.log(error + '');
        return res.status(500).send(error);
    }
}
async function deletePart1(IDTest, IDYear) {
    // console.log("Vao");
    try {
        await admindbPart1.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(async data => {
            // console.log(data);
            data.forEach(docData => {
                admindbPart1.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) {
        // console.log(error + '');
    }
}

exports.AddPart2 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart2.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart2 = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart2.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(data => {
                data.forEach(docData => {
                    admindbPart2.collection('data').doc(docData.id).update(element);
                })

            });
            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }

        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart2(IDTest, IDYear) {
    try {
        admindbPart2.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart2.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}
exports.AddPart3 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart3.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart3 = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart3.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDAudio', '==', element.IDAudio).get().then(data => {
                data.forEach(docData => {
                    admindbPart3.collection('data').doc(docData.id).update(element);
                })
            });
            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            };
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart3(IDTest, IDYear) {
    try {
        admindbPart3.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart3.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}

exports.AddPart4 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart4.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart4 = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart4.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDAudio', '==', element.IDAudio).get().then(data => {
                data.forEach(docData => {
                    admindbPart4.collection('data').doc(docData.id).update(element);
                })
            })

            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart4(IDTest, IDYear) {
    try {
        admindbPart4.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart4.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}
exports.AddPart5 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart5.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart5 = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart5.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(data => {
                // console.log(data);
                data.forEach(docData => {
                    admindbPart5.collection('data').doc(docData.id).update(element);
                })
            })
            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart5(IDTest, IDYear) {
    try {
        admindbPart5.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            // console.log(data);
            data.forEach(docData => {
                admindbPart5.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}
exports.AddPart6 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart6.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart6 = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart6.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDReading', '==', element.IDReading).get().then(data => {
                data.forEach(docData => {
                    admindbPart6.collection('data').doc(docData.id).update(element);
                })
            })

            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }

        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        returnres.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart6(IDTest, IDYear) {
    try {
        admindbPart6.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart6.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}
exports.AddPart7 = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart7.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart7 = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart7.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDReading', '==', element.IDReading).get().then(data => {
                data.forEach(docData => {
                    admindbPart7.collection('data').doc(docData.id).update(element);
                })
            })

            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }

        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart7(IDTest, IDYear) {
    try {
        admindbPart7.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart7.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}


exports.AddPart3Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart3Detail.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart3Detail = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async (element) => {
            admindbPart3Detail.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(data => {
                data.forEach(docData => {
                    admindbPart3Detail.collection('data').doc(docData.id).update(element);
                })
            })

            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart3dt(IDTest, IDYear) {
    try {
        admindbPart3Detail.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).then(data => {
            data.forEach(docData => {
                admindbPart3Detail.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}

exports.AddPart4Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart4Detail.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart4Detail = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async element => {
            admindbPart4Detail.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(data => {
                data.forEach(docData => {
                    admindbPart4Detail.collection('data').doc(docData.id).update(element);
                })
            })
            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart4dt(IDTest, IDYear) {
    try {
        admindbPart4Detail.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart4Detail.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}
exports.AddPart6Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart6Detail.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart6Detail = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async element => {
            admindbPart6Detail.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(data => {
                data.forEach(docData => {
                    admindbPart6Detail.collection('data').doc(docData.id).update(element);
                })
            })

            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart6dt(IDTest, IDYear) {
    try {
        admindbPart6Detail.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart6Detail.collection('data').doc(docData.id).delete();
            })
        })
    } catch (error) { }
}
exports.AddPart7Detail = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbPart7Detail.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.UpdatePart7Detail = async (req, res) => {
    var object = req.body;
    try {
        var Item = {};
        const arr = []
        const user = await admindb.get();
        user.forEach(elementuser => {
            arr.push(elementuser.id)
        })
        await Promise.all(object.map(async element => {
            admindbPart7Detail.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).where('IDQuestion', '==', element.IDQuestion).get().then(data => {
                data.forEach(docData => {
                    admindbPart7Detail.collection('data').doc(docData.id).update(element);;
                })
            })
            Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 2
            }
        }));
        await Promise.all(arr.map(async id => {
            // console.log(id);
            await admindb.doc(id).collection('array').add(Item);
        }))
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
async function deletePart7dt(IDTest, IDYear) {
    try {
        admindbPart7Detail.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(data => {
            data.forEach(docData => {
                admindbPart7Detail.collection('data').doc(docData.id).delete();;
            })
        })
    } catch (error) { }
}
// exports.AddTest = async (req, res) => {
//     var object = req.body;
//     const arr = []
//     const user = await admindb.get();
//     user.forEach(elementuser => {
//         arr.push(elementuser.id)
//     })
//     try {
//         await Promise.all(object.map(async (element) => {
//             admindbTest.collection('data').add(element);
//             const item = {
//                 IDTest: element.IDTest,
//                 IDYear: element.IDYear
//             }
//             // console.log(item);
//             await Promise.all(arr.map(async id => {
//                 await admindb.doc(id).collection('array').add(item)
//             }))
//         }));
//         res.json({
//             status: true
//         });
//     } catch (error) {
//         // console.log(error + '');
//         res.status(500).send(error);
//     }

// }
exports.AddTest = async (req, res) => {

    var object = req.body;
    const arr = []
    const user = await admindb.get();
    user.forEach(elementuser => {
        arr.push(elementuser.id)
    })
    try {
        await Promise.all(object.map(async (element) => {
            admindbTest.collection('data').add(element);

            const Item = {
                IDTest: element.IDTest,
                IDYear: element.IDYear,
                TypeUpdate: 0
            }

            await Promise.all(arr.map(async id => {
                await admindb.doc(id).collection('array').add(Item);
                await admindb.doc(id).update({
                    newData: true
                })
            }))

        }));
        const messages = [];
        messages.push({
            notification: {
                title: 'Cập nhật đề ☝☝☝',
                body: 'Đã có thêm ' + object.length + ' mới để cập nhật'
            },
            topic: 'NotificaAdmin',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                // console.log(response.successCount + ' messages were sent successfully');
            });
        return res.status(200).json({
            status: true
        });
    } catch (error) {
        // console.log(error + '');
        return res.status(500).json({
            status: false,
            message: error + ''
        })
    }

}
exports.UpdateTest = async (req, res) => {
    // console.log('vao');
    var object = req.body;
    const arr = []
    const user = await admindb.get();
    user.forEach(elementuser => {
        arr.push(elementuser.id)
    })
    try {
        // console.log('vao try');
        await Promise.all(object.map(async element => {
            await admindbTest.collection('data').where('IDYear', '==', element.IDYear).where('IDTest', '==', element.IDTest).get().then(async data => {
                data.forEach(async docTest => {
                    admindbTest.collection('data').doc(docTest.id).update(element);
                    const Item = {
                        IDTest: docTest.data().IDTest,
                        IDYear: docTest.data().IDYear,
                        TypeUpdate: 2
                    }

                    await Promise.all(arr.map(async id => {
                        await admindb.doc(id).collection('array').add(Item);
                    }))
                })
            });
        }));
        await Promise.all(arr.map(async id => {
            await admindb.doc(id).update({
                newData: true
            })
        }))
        const messages = [];
        messages.push({
            notification: {
                title: 'Bản cập nhật sửa lỗi đề',
                body: 'Vui lòng cập nhật để sửa lỗi đề'
            },
            topic: 'NotificaAdmin',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                // console.log(response.successCount + ' messages were sent successfully');
            });
        return res.status(200).json({
            status: true
        });
    } catch (error) {
        // console.log('loi', error + '');
        res.status(500).send(error);
    }
}
exports.DeleteTest = async (req, res) => {
    const IDTest = parseInt(req.query.IDTest);
    const IDYear = parseInt(req.query.IDYear);
    // console.log(typeof IDTest + '   ' + IDYear)
    deletePart1(IDTest, IDYear);
    deletePart2(IDTest, IDYear);
    deletePart3(IDTest, IDYear);
    deletePart4(IDTest, IDYear);
    deletePart5(IDTest, IDYear);
    deletePart6(IDTest, IDYear);
    deletePart7(IDTest, IDYear);
    deletePart3dt(IDTest, IDYear);
    deletePart4dt(IDTest, IDYear);
    deletePart6dt(IDTest, IDYear);
    deletePart7dt(IDTest, IDYear);
    // console.log('vao');
    const arr = []
    const user = await admindb.get();
    user.forEach(elementuser => {
        arr.push(elementuser.id)
    })
    try {
        // console.log('vao try');

        await admindbTest.collection('data').where('IDYear', '==', IDYear).where('IDTest', '==', IDTest).get().then(async data => {
            data.forEach(async docTest => {
                admindbTest.collection('data').doc(docTest.id).delete();
                const Item = {
                    IDTest: docTest.data().IDTest,
                    IDYear: docTest.data().IDYear,
                    TypeUpdate: 1
                }

                await Promise.all(arr.map(async id => {
                    await admindb.doc(id).collection('array').add(Item);
                    await admindb.doc(id).update({
                        newData: true
                    })
                }))
            })
        });

        await Promise.all(arr.map(async id => {
            await admindb.doc(id).update({
                newData: true
            })
        }))
        const messages = [];
        messages.push({
            notification: {
                title: 'Đã xóa một số đề',
                body: 'Vui lòng cập nhật lại cơ sở dữ liệu'
            },
            topic: 'NotificaAdmin',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                // console.log(response.successCount + ' messages were sent successfully');
            });
        return res.status(200).json({
            status: true
        });
    } catch (error) {
        // console.log('loi', error + '');
        res.status(500).send(error);
    }
}
exports.AddYear = (req, res) => {
    var object = req.body;
    try {
        object.forEach(element => {
            admindbYear.collection('data').add(element);
        });
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.UpdateYear = async (req, res) => {
    var object = req.body;
    try {
        await Promise.all(object.map(element => {
            admindbYear.collection('data').where('IDYear', '==', element.IDYear).get().then(data => {
                data.forEach(docData => {
                    admindbYear.collection('data').doc(docData.id).update(element);
                })
            })
        }));
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.DeleteYear = async (req, res) => {
    const IDYear = parseInt(req.query.IDYear);
    try {
        admindbYear.collection('data').where('IDYear', '==', IDYear).get().then(data => {
            data.forEach(docData => {
                admindbYear.collection('data').doc(docData.id).delete();
            })
        })
        return res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send(error);
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

    if (req.headers.authorization != undefined) {
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);

                try {
                    const arrListGet = []
                    const arrListGettam = await admindb.doc(req.params.uid).collection('array').get();
                    arrListGettam.forEach(element => {
                        if (element.data().TypeUpdate != 1) {
                            arrListGet.push(element.data());
                        }
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }

            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    } else {
        res.status(500).json({ error: 'Tính hack à???' });
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
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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

    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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

    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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

    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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

    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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

    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
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
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
    }
    
}
exports.AddVocabulary = async (req, res) => {
    var object = req.body;
    const arr = []
    const user = await admindb.get();
    user.forEach(elementuser => {
        arr.push(elementuser.id)
    })
    try {
        await Promise.all(object.map(element => {
            admindbVocabulary.collection('data').add(element);
        }));
        await Promise.all(arr.map(async id => {
            await admindb.doc(id).update({
                newData: true
            })
        }))
        const messages = [];
        messages.push({
            notification: {
                title: 'Cập nhật từ vựng mới 🐱‍🏍🐱‍🏍🐱‍🏍',
                body: 'Đã có thêm ' + object.length + ' từ vựng mới để cập nhật'
            },
            topic: 'NotificaAdmin',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                // console.log(response.successCount + ' messages were sent successfully');
            });
        return res.status(200).json({
            status: true,
        })
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
exports.GetDataVocabularyByUid = async (req, res) => {
    if(req.headers.authorization!=undefined){
        var idToken = req.headers.authorization;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            // console.log('ID Token correctly decoded', decodedIdToken);
            admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
                // console.log(userRecord);
    
                try {
                    const user = await admindb.doc(req.params.uid).get();
                    const number = user._fieldsProto.ValueVoca.integerValue;
                    // console.log(number);
                    var arr = [];
                    await admindbVocabulary.collection('data').where('ID', '>', parseInt(number)).get().then(dataget => {
                        dataget.forEach(element => {
                            arr.push(element.data())
                        })
                    });
                    res.send(arr);
                } catch (error) {
                    // console.log(error + '')
                    res.status(500).send(error);
                }
    
            }).catch(error => {
                console.error('Error while getting Firebase User record:', error);
                res.status(403).json({ error: 'Unauthorized' });
            });
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).json({ error: 'Unauthorized' });
        });
    }else{
        res.status(500).json({ error: 'Tính hack à???' });
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
    DeleteCustom('Part3Detail');
    DeleteCustom('Part4Detail');
    DeleteCustom('Part6Detail');
    DeleteCustom('Part7Detail');
    res.send('oke');
}

// exports.DeleteOne = (req, res) => {
//     try {
//         // console.log('vao');
//         // console.log(req.params.one);
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
//         // console.log('vaoloi');
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
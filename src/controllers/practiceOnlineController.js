const {
    admin,
    adminPractice
} = require('../firebase/firebase-confix');
exports.GetDataPractice = async (req, res) => {


    var practice = adminPractice.doc(req.params.id);
    var object = {};
    var data = [];
    try {
        dataPart1 = await practice.collection('part1').get();
        dataPart1.forEach(part1 => {
            var object = part1.data();
            var objectT = {
                audio: object.Audio,
                image: object.Image,
                questions: [{
                    question: object.Questions,
                    A: object.A,
                    B: object.B,
                    C: object.C,
                    D: object.D,
                    correct: object.Correct,
                    results: '',
                }
                ],
                showQuestion: false,
                showDA: true,
            };
            data.push(objectT);
        });
        // await Promise.all(dataPart1.map(element=>{
        //     // console.log("???");
        //     arrPart1.push(element.data())
        // }))


        dataPart2 = await practice.collection('part2').get();
        dataPart2.forEach(part2 => {
            var object = part2.data();
            object.results = "";
            var objectT = {
                audio: object.Audio,
                image: null,
                questions: [
                    {
                        question: object.Questions,
                        A: object.A,
                        B: object.B,
                        C: object.C,
                        D: object.D,
                        correct: object.Correct,
                        results: '',
                        explain: object.Explain,
                    }
                ],
                showQuestion: false,
                showDA: true,
            };
            data.push(objectT);
        });

        dataPart3 = await practice.collection('part3').get();
        const arrPart3 = []
        dataPart3.forEach(element => {
            arrPart3.push(element.data());
        });

        dataPart4 = await practice.collection('part4').get();
        const arrPart4 = []
        dataPart4.forEach(element => {
            arrPart4.push(element.data());
        });

        dataPart5 = await practice.collection('part5').get();

        dataPart6 = await practice.collection('part6').get();
        const arrPart6 = []
        dataPart6.forEach(element => {
            arrPart6.push(element.data());
        });

        dataPart7 = await practice.collection('part7').get();
        const arrPart7 = []
        dataPart7.forEach(element => {
            arrPart7.push(element.data());
        });

        dataPart3Detail = await practice.collection('part3Detail').get();
        const arrPart3Detail = []
        dataPart3Detail.forEach(element => {
            arrPart3Detail.push(element.data());
        });
        dataPart4Detail = await practice.collection('part4Detail').get();
        const arrPart4Detail = []
        dataPart4Detail.forEach(element => {
            arrPart4Detail.push(element.data());
        });
        dataPart6Detail = await practice.collection('part6Detail').get();
        const arrPart6Detail = []
        dataPart6Detail.forEach(element => {
            arrPart6Detail.push(element.data());
        });
        dataPart7Detail = await practice.collection('part7Detail').get();
        const arrPart7Detail = []
        dataPart7Detail.forEach(element => {
            arrPart7Detail.push(element.data());
        });

        await practice.get().then(data => {
            object.time = data._fieldsProto.time.integerValue;
            object.title = data._fieldsProto.title.stringValue;
            object.decription = data._fieldsProto.decription.stringValue;
            object.status = data._fieldsProto.status.booleanValue
        });
        // id: part2._fieldsProto.idQuestion.integerValue,
        // audio: part2._fieldsProto.audio.stringValue,
        arrPart3.forEach(part3 => {
            var objectT = {
                id: null,
                audio: part3.Audio,
                image: null,
                explain: part3.Explain,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart3 = [];
            arrPart3Detail.forEach(part3Detail => {

                if (part3Detail.IDAudio === part3.IDAudio) {
                    var part3DetailTam = {
                        results: "",
                        explain: "",
                        question: part3Detail.Question,
                        A: part3Detail.A,
                        B: part3Detail.B,
                        C: part3Detail.C,
                        D: part3Detail.D,
                        correct: part3Detail.Correct,
                    }
                    lstQuestionPart3.push(part3DetailTam);
                }
            })
            objectT.questions = lstQuestionPart3;
            data.push(objectT);
        })
        arrPart4.forEach(part4 => {
            var objectT = {
                audio: part4.Audio,
                explain: part4.Explain,
                image: null,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart4 = [];
            arrPart4Detail.forEach(part4Detail => {
                if (part4Detail.IDAudio === part4.IDAudio) {
                    var part4DetailTam = {
                        results: "",
                        explain: "",
                        question: part4Detail.Question,
                        A: part4Detail.A,
                        B: part4Detail.B,
                        C: part4Detail.C,
                        D: part4Detail.D,
                        correct: part4Detail.Correct,
                    }
                    lstQuestionPart4.push(part4DetailTam);
                }
            })
            objectT.questions = lstQuestionPart4;
            data.push(objectT);
        })
        dataPart5.forEach(part5 => {
            var object = part5.data();
            object.results = "";
            var objectT = {
                showQuestion: true,
                showDA: true,
                audio: '',
                image: null,
                questions: [
                    {
                        question: object.Question,
                        A: object.A,
                        B: object.B,
                        C: object.C,
                        D: object.D,
                        correct: object.Correct,
                        results: '',
                        explain: object.Explain,
                    }
                ]
            };
            data.push(objectT);
        });
        arrPart6.forEach(part6 => {
            var objectT = {
                audio: '',
                image: part6.Image,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart6 = [];
            arrPart6Detail.forEach(part6Detail => {
                if (part6Detail.IDReading === part6.IDReading) {
                    var part6DetailTam = {
                        results: "",
                        explain: part6Detail.Explain,
                        question: part6Detail.Question,
                        A: part6Detail.A,
                        B: part6Detail.B,
                        C: part6Detail.C,
                        D: part6Detail.D,
                        correct: part6Detail.Correct,
                    }
                    lstQuestionPart6.push(part6DetailTam);
                }
            })
            objectT.questions = lstQuestionPart6;
            data.push(objectT);
        })
        arrPart7.forEach(part7 => {
            var objectT = {
                audio: '',
                image: part7.Image,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart7 = [];
            arrPart7Detail.forEach(part7Detail => {
                if (part7Detail.IDReading === part7.IDReading) {
                    var part7DetailTam = {
                        question: part7Detail.Question,
                        A: part7Detail.A,
                        B: part7Detail.B,
                        C: part7Detail.C,
                        D: part7Detail.D,
                        correct: part7Detail.Correct,
                        results: '',
                        explain: part7Detail.Explain,
                    }
                    lstQuestionPart7.push(part7DetailTam);
                }
            })
            objectT.questions = lstQuestionPart7;
            data.push(objectT);
        })
        let idQs = 1;
        for (let i = 0; i < data.length; i++) {
            data[i].id = i;
            for (let j = 0; j < data[i].questions.length; j++) {

                data[i].questions[j].idQuestion = idQs;
                idQs++;
            }
        }
        data.sort((a, b) => {
            return a.id - b.id;
        })
        data.forEach(question => {
            question.questions.sort((a, b) => {
                return a.idQuestion - b.idQuestion;
            })
        })
        object.listQuestions = data;
        return res.json({
            status: true,
            data: object,
            messages: 'Get data success!'
        }

        );
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: false,
            data: null,
            messages: error.message
        });
    }
}
exports.AddPracticeJson = async (req, res) => {
    console.log("Vao 123");
    var object = req.body;
    var idTest = adminPractice.doc().id;
    var practice = adminPractice.doc(idTest);
    const part1Format = ['A', 'Audio', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear', 'Image', 'Question'];
    const part2Format = ['A', 'B', 'C', 'Audio', 'Correct', 'IDTest', 'IDYear', 'Question', 'IDQuestion'];
    const part3Format = ['Audio', 'Explain', 'IDAudio', 'IDTest', 'IDYear', 'Image', 'Translate'];
    const part4Format = ['Audio', 'Explain', 'IDAudio', 'IDTest', 'IDYear', 'Image', 'Translate'];
    const part5Format = ['A', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear', 'Explain', 'Question'];
    const part6Format = ['IDReading', 'IDTest', 'IDYear', 'Image'];
    const part7Format = ['IDReading', 'IDTest', 'IDYear', 'Image'];
    const part3DTFormat = ['A', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear', 'IDAudio', 'Question'];
    const part4DTFormat = ['A', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear', 'IDAudio', 'Question'];
    const part6DTFormat = ['A', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear', 'Explain', 'IDReading'];
    const part7DTFormat = ['A', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear', 'Explain', 'IDReading', 'Question'];
    try {
        await checkFormat(part1Format, object.dataPart1[0]);
        await checkFormat(part2Format, object.dataPart2[0]);
        await checkFormat(part3Format, object.dataPart3[0]);
        await checkFormat(part4Format, object.dataPart4[0]);
        await checkFormat(part5Format, object.dataPart5[0]);
        await checkFormat(part6Format, object.dataPart6[0]);
        await checkFormat(part7Format, object.dataPart7[0]);
        await checkFormat(part3DTFormat, object.dataPart3Detail[0]);
        await checkFormat(part4DTFormat, object.dataPart4Detail[0]);
        await checkFormat(part6DTFormat, object.dataPart6Detail[0]);
        await checkFormat(part7DTFormat, object.dataPart7Detail[0]);
    } catch (error) {
        return res.json({
            status: false,
            messages: 'File is not in the correct format!'
        });
    }

    try {
        practice.set({
            "idData": idTest,
            "time": object.time,
            "title": object.title,
            "decription": object.decription,
            "status": true,
            "countStudent": 0
        })
        AddPart1(object.dataPart1, practice);
        AddPart2(object.dataPart2, practice);
        AddPart3(object.dataPart3, practice);
        AddPart4(object.dataPart4, practice);
        AddPart5(object.dataPart5, practice);
        AddPart6(object.dataPart6, practice);
        AddPart7(object.dataPart7, practice);
        AddPart3Detail(object.dataPart3Detail, practice);
        AddPart4Detail(object.dataPart4Detail, practice);
        AddPart6Detail(object.dataPart6Detail, practice);
        AddPart7Detail(object.dataPart7Detail, practice);

        var date = null;
        try {
            date = new Date(object.time).customFormat("#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#");
        } catch (e) {
            date = new Date(object.time).toDateString();
        }
        const messages = [];
        messages.push({
            // data: {
            //     type: 'practice_online',
            //     title: 'Lịch thi online mới',
            //     body: 'Lịch thi mới vào ngày  ' + date
            // },
            notification: {
                title: 'Lịch thi online mới',
                body: 'Lịch thi mới vào ngày  ' + date
            },
            topic: 'practice_online',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                // console.log(response.successCount + ' messages were sent successfully');
            });
        return res.json({
            status: true,
            messages: 'Add test success!'
        });
    } catch (error) {
        console.log(error + "");
        return res.status(500).send({
            status: false,
            messages: error.message
        });
    }
}
const checkFormat = async (format, arrayPart) => {
    return new Promise(async (resolve, reject) => {
        await Promise.all(format.map(async element => {
            if (!arrayPart.hasOwnProperty(element)) {
                console.log('stop');
                reject(false);
            }
        }));
        resolve(true);
    })
}
exports.AddPractice =async (req, res) => {
    var object = req.body;
    var idTest = adminPractice.doc().id;
    var practice = adminPractice.doc(idTest);
    const part1Format = ['A', 'Audio', 'B', 'C', 'D', 'Correct'];
    const part2Format = ['A', 'B', 'C', 'Audio', 'Correct', 'IDTest', 'IDYear'];
    const part3Format = ['Audio', 'Explain', 'IDAudio', 'IDTest', 'IDYear'];
    const part4Format = ['Audio', 'Explain', 'IDAudio', 'IDTest', 'IDYear'];
    const part5Format = ['A', 'B', 'C', 'D', 'Correct', 'IDQuestion', 'IDTest', 'IDYear'];
    const part6Format = ['IDReading', 'IDTest', 'IDYear'];
    const part7Format = ['IDReading', 'IDTest', 'IDYear'];
    const part3DTFormat = ['A', 'B', 'C', 'D'];
    const part4DTFormat = ['A', 'B', 'C', 'D'];
    const part6DTFormat = ['A', 'B', 'C', 'D'];
    const part7DTFormat = ['A', 'B', 'C', 'D' ];
    try {
        await checkFormat(part1Format, JSON.parse(object.dataPart1)[0]);
        await checkFormat(part2Format, JSON.parse(object.dataPart2)[0]);
        await checkFormat(part3Format, JSON.parse(object.dataPart3)[0]);
        await checkFormat(part4Format, JSON.parse(object.dataPart4)[0]);
        await checkFormat(part5Format, JSON.parse(object.dataPart5)[0]);
        await checkFormat(part6Format, JSON.parse(object.dataPart6)[0]);
        await checkFormat(part7Format, JSON.parse(object.dataPart7)[0]);
        await checkFormat(part3DTFormat, JSON.parse(object.dataPart3Detail)[0]);
        await checkFormat(part4DTFormat, JSON.parse(object.dataPart4Detail)[0]);
        await checkFormat(part6DTFormat, JSON.parse(object.dataPart6Detail)[0]);
        await checkFormat(part7DTFormat, JSON.parse(object.dataPart7Detail)[0]);
    } catch (error) {
        return res.json({
            status: false,
            messages: 'File is not in the correct format!'
        });
    }
    try {
        practice.set({
            "idData": idTest,
            "time": object.time,
            "title": object.title,
            "decription": object.decription,
            "status": true,
            "countStudent": 0
        })
        AddPart1(JSON.parse(object.dataPart1), practice);
        AddPart2(JSON.parse(object.dataPart2), practice);
        AddPart3(JSON.parse(object.dataPart3), practice);
        AddPart4(JSON.parse(object.dataPart4), practice);
        AddPart5(JSON.parse(object.dataPart5), practice);
        AddPart6(JSON.parse(object.dataPart6), practice);
        AddPart7(JSON.parse(object.dataPart7), practice);
        AddPart3Detail(JSON.parse(object.dataPart3Detail), practice);
        AddPart4Detail(JSON.parse(object.dataPart4Detail), practice);
        AddPart6Detail(JSON.parse(object.dataPart6Detail), practice);
        AddPart7Detail(JSON.parse(object.dataPart7Detail), practice);

        var date = null;
        try {
            date = new Date(object.time).customFormat("#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#");
        } catch (e) {
            date = new Date(object.time).toDateString();
        }

        const messages = [];
        messages.push({
            // data: {
            //     type: 'practice_online',
            //     title: 'Lịch thi online mới',
            //     body: 'Lịch thi mới vào ngày  ' + date
            // },
            notification: {
                title: 'Lịch thi online mới',
                body: 'Lịch thi mới vào ngày  ' + date
            },
            topic: 'practice_online',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                // console.log(response.successCount + ' messages were sent successfully');
            });
        return res.json({
            status: true,
            messages: 'Add new test success!'
        });
    } catch (error) {
        console.log(error + "");
        return res.status(500).send({
            status: false,
            messages: error.message
        });
    }
}
exports.DeletePracticeOnline  = (req, res) => {
    DeleteCustom(req.query.IDData, 'part1');
    DeleteCustom(req.query.IDData, 'part2');
    DeleteCustom(req.query.IDData, 'part3');
    DeleteCustom(req.query.IDData, 'part4');
    DeleteCustom(req.query.IDData, 'part5');
    DeleteCustom(req.query.IDData, 'part6');
    DeleteCustom(req.query.IDData, 'part7');
    DeleteCustom(req.query.IDData, 'part3Detail');
    DeleteCustom(req.query.IDData, 'part4Detail');
    DeleteCustom(req.query.IDData, 'part6Detail');
    DeleteCustom(req.query.IDData, 'part7Detail');
    DeleteCustom(req.query.IDData, 'listResult');
    adminPractice.doc(req.query.IDData).delete().then(() => {
        return res.json({
            status: true,
            messages: 'Delete success!'
        });
    }).catch(error => {
        return res.json({
            status: false,
            messages: error.message
        });
    })
}

async function DeleteCustom(docname, nameTable) {
    console.log("vao");
    try {
        const batchArray = [];
        batchArray.push(admin.firestore().batch());
        let operationCounter = 0;
        let batchIndex = 0;

        const documentSnapshotArray = await adminPractice.doc(docname).collection(nameTable).get();
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
    } catch (error) {
        console.log(error);
    }
}

const AddPart1 = async (part1, practice) => {
    // console.log(typeof (part1));
    try {
        await Promise.all(part1.map(async (element) => {
            await practice.collection('part1').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart2 = async (part2, practice) => {
    try {
        await Promise.all(part2.map(async (element) => {
            await practice.collection('part2').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart3 = async (part3, practice) => {
    try {
        await Promise.all(part3.map(async (element) => {
            await practice.collection('part3').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart4 = async (part4, practice) => {
    try {
        await Promise.all(part4.map(async (element) => {
            await practice.collection('part4').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart5 = async (part5, practice) => {
    try {
        await Promise.all(part5.map(async (element) => {
            await practice.collection('part5').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart6 = async (part6, practice) => {
    try {
        await Promise.all(part6.map(async (element) => {
            await practice.collection('part6').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart7 = async (part7, practice) => {
    try {
        await Promise.all(part7.map(async (element) => {
            await practice.collection('part7').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart3Detail = async (part3Detail, practice) => {
    try {
        await Promise.all(part3Detail.map(async (element) => {
            await practice.collection('part3Detail').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart4Detail = async (part4Detail, practice) => {
    try {
        await Promise.all(part4Detail.map(async (element) => {
            await practice.collection('part4Detail').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart6Detail = async (part6Detail, practice) => {
    try {
        await Promise.all(part6Detail.map(async (element) => {
            await practice.collection('part6Detail').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}
const AddPart7Detail = async (part7Detail, practice) => {
    try {
        await Promise.all(part7Detail.map(async (element) => {
            await practice.collection('part7Detail').add(element);
        }))
    } catch (error) {
        // console.log(error);
    }
}

const getListUpcommingElement = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const listPractce = await adminPractice.listDocuments();
            const listReturn = [];
            await Promise.all(listPractce.map(async (element) => {
                await adminPractice.doc(element.id).get().then(snapshot => {
                    var d = new Date();
                    var n = d.getTime();
                    if (snapshot.get('time') >= n) {
                        var object = {
                            status: snapshot.get('status'),
                            title: snapshot.get('title'),
                            idData: snapshot.get('idData'),
                            decription: snapshot.get('decription'),
                            time: snapshot.get('time'),
                            userCount: snapshot.get('countStudent')
                        };
                        listReturn.push(object);
                    }
                })

            }))
            resolve(listReturn);
        } catch (error) {
            // console.log(error);
            reject([])
        }

    })
}

exports.GetListPractice = async (req, res) => {

    try {
        const listPractce = await adminPractice.listDocuments();
        const listReturn = [];
        await Promise.all(listPractce.map(async (element) => {
            await adminPractice.doc(element.id).get().then(snapshot => {
                var object = {
                    status: snapshot.get('status'),
                    title: snapshot.get('title'),
                    idData: snapshot.get('idData'),
                    decription: snapshot.get('decription'),
                    time: snapshot.get('time'),
                    userCount: snapshot.get('countStudent')
                };
                listReturn.push(object);
            })

        }))
        listReturn.sort((a, b) => {
            return b.time - a.time;
        })
        return res.json(
            {
                status: true,
                data: listReturn,
                messages: 'Get data success!'
            }

        );
    } catch (error) {
        return res.status(500).send({
            status: false,
            data: null,
            messages: error.message
        });
    }


}



exports.GetListPracticeHistory = async (req, res) => {

    try {
        const listPractce = await adminPractice.listDocuments();
        const listReturn = [];
        var d = new Date();
        var n = d.getTime();
        await Promise.all(listPractce.map(async (element) => {
            await adminPractice.doc(element.id).get().then(async (snapshot) => {
                if (snapshot.get('time') <= n + 7200000) {
                    var object = {
                        title: snapshot.get('title'),
                        idData: snapshot.get('idData'),
                        decription: snapshot.get('decription'),
                        time: snapshot.get('time'),
                        userCount: snapshot.get('countStudent')
                    };
                    if (snapshot.get('time') - n + 7200000 >= 0) {
                        object.status = true
                    } else {
                        object.status = false
                    }
                    var listCount = 0;
                    await element.collection("listResult").get().then(snap => {
                        listCount = snap.size;
                    })
                    object.userCount = listCount;
                    listReturn.push(object);
                }
            })

        }))

        var listcomming = await getListUpcommingElement();
        listcomming.sort((a, b) => {
            return a.time - b.time;
        })
        listReturn.push(listcomming[0]);
        listReturn.sort((a, b) => {
            return b.time - a.time;
        })
        listReturn[0].status = true;
        return res.json({
            status: true,
            messages: 'Get data succsess!',
            data: listReturn
        }

        );
    } catch (error) {
        // console.log(error);
        return res.status(500).send({
            status: false,
            messages: error.message,
            data: null
        });
    }
}

exports.GetListPracticeComming = async (req, res) => {
    try {
        var listReturn = await getListUpcommingElement();

        listReturn.sort((a, b) => {
            return a.time - b.time;
        })
        return res.json({
            status: true,
            messages: 'Get data success!',
            data: listReturn
        }

        );
    } catch (error) {
        return res.status(500).send({
            status: false,
            messages: error.message,
            data: null
        });
    }

}

exports.Result = async (req, res) => {
    try {
        const object = req.body;

        const docPractice = adminPractice.doc(object.idData);
        await docPractice.get().then(async (snapshot) => {
            console.log(snapshot);
            const value = snapshot.get("countStudent");
            docPractice.update({
                countStudent: value + 1
            })
            docPractice.collection('listResult').add(object);
        })
        return res.json({
            status: true,
            data: null,
            messages: 'Add result sussess!'
        });


    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: false,
            data: null,
            messages: error.message
        });
    }

}
exports.GetResult = async (req, res) => {

    try {
        // console.log(req.params.id);
        const collectionPractice = await adminPractice.doc(req.params.id).collection('listResult').orderBy('amountCorrect', 'desc').limit(15).get();
        const listResult = [];
        collectionPractice.forEach(element => {
            listResult.push(element.data());
        })
        listResult.sort((a, b) => {
            if (a.amountCorrect == b.amountCorrect) {
                return a.timePractice - b.timePractice;
            }
        })
        return res.json({
            status: true,
            messages: 'Get Data success!',
            data: listResult
        }

        );
    } catch (error) {
        return res.status(500).send({
            status: false,
            messages: error.message,
            data: null
        });
    }

}
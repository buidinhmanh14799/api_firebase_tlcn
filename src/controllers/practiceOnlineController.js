const {
    admin,
    adminPractice
} = require('../firebase/firebase-confix');
exports.GetDataPractice = async(req, res) => {
    var practice = adminPractice.doc(req.params.id);
    var object = {};
    var data = [];
    try {
        dataPart1 = await practice.collection('part1').get();
        dataPart1.forEach(part1 => {
            var object = part1.data();
            object.results = "";
            var objectT = {
                id: part1._fieldsProto.idQuestion.integerValue,
                audio: part1._fieldsProto.audio.stringValue,
                image: part1._fieldsProto.image.stringValue,
                questions: [
                    object
                ],
                showQuestion: false,
                showDA: true,
            };
            data.push(objectT);
        });
        // await Promise.all(dataPart1.map(element=>{
        //     console.log("???");
        //     arrPart1.push(element.data())
        // }))


        dataPart2 = await practice.collection('part2').get();
        dataPart2.forEach(part2 => {
            var object = part2.data();
            object.results = "";
            var objectT = {
                id: part2._fieldsProto.idQuestion.integerValue,
                audio: part2._fieldsProto.audio.stringValue,
                image: null,
                questions: [
                    object
                ],
                showQuestion: false,
                showDA: false,
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
                id: 1,
                audio: part3.audio,
                image: null,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart3 = [];
            arrPart3Detail.forEach(part3Detail => {

                if (part3Detail.idAudio === part3.idAudio) {
                    part3Detail.results = "",
                        lstQuestionPart3.push(part3Detail);
                }
            })
            objectT.questions = lstQuestionPart3;
            data.push(objectT);
        })

        arrPart4.forEach(part4 => {
            var objectT = {
                id: 1,
                audio: part4.audio,
                image: null,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart4 = [];
            arrPart4Detail.forEach(part4Detail => {
                if (part4Detail.idAudio === part4.idAudio) {
                    part4Detail.results = "",
                        lstQuestionPart4.push(part4Detail);
                }
            })
            objectT.questions = lstQuestionPart4;
            data.push(objectT);
        })
        dataPart5.forEach(part5 => {
            part5.showQuestion = true;
            part5.showDA = true;
            var object = part5.data();
            object.results = "";
            var objectT = {
                audio: '',
                image: null,
                questions: [
                    object
                ]
            };
            data.push(objectT);
        });
        arrPart6.forEach(part6 => {
            var objectT = {
                id: part6.idQuestion,
                audio: '',
                image: part6.image,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart6 = [];
            arrPart6Detail.forEach(part6Detail => {
                if (part6Detail.idReading === part6.idReading) {
                    part6Detail.results = "",
                        lstQuestionPart6.push(part6Detail);
                }
            })
            objectT.questions = lstQuestionPart6;
            data.push(objectT);
        })
        arrPart7.forEach(part7 => {
            var objectT = {
                id: part7.idQuestion,
                audio: '',
                image: part7.image,
                showQuestion: true,
                showDA: true,
            };
            var lstQuestionPart7 = [];
            arrPart7Detail.forEach(part7Detail => {
                if (part7Detail.idReading === part7.idReading) {
                    part7Detail.results = "",
                        lstQuestionPart7.push(part7Detail);
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
        return res.json(
            object
        );
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }

}

exports.AddPractice = (req, res) => {
    console.log("Vao");
    var object = req.body;
    var practice = adminPractice.doc(object.id);
    practice.set({
        "idData": object.id,
        "time": object.time,
        "title": object.title,
        "decription": object.decription,
        "status": object.status,
        "countStudent": 0
    })
    try {
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
        return res.json({
            status: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

const AddPart1 = async(part1, practice) => {
    console.log(typeof(part1));
    try {
        await Promise.all(part1.map(async(element) => {
            await practice.collection('part1').add(element);
        }))
    } catch (error) {
        return res.status(500).send(error);
    }
}
const AddPart2 = async(part2, practice) => {
    try {
        await Promise.all(part2.map(async(element) => {
            await practice.collection('part2').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart3 = async(part3, practice) => {
    try {
        await Promise.all(part3.map(async(element) => {
            await practice.collection('part3').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart4 = async(part4, practice) => {
    try {
        await Promise.all(part4.map(async(element) => {
            await practice.collection('part4').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart5 = async(part5, practice) => {
    try {
        await Promise.all(part5.map(async(element) => {
            await practice.collection('part5').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart6 = async(part6, practice) => {
    try {
        await Promise.all(part6.map(async(element) => {
            await practice.collection('part6').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart7 = async(part7, practice) => {
    try {
        await Promise.all(part7.map(async(element) => {
            await practice.collection('part7').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart3Detail = async(part3Detail, practice) => {
    try {
        await Promise.all(part3Detail.map(async(element) => {
            await practice.collection('part3Detail').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart4Detail = async(part4Detail, practice) => {
    try {
        await Promise.all(part4Detail.map(async(element) => {
            await practice.collection('part4Detail').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart6Detail = async(part6Detail, practice) => {
    try {
        await Promise.all(part6Detail.map(async(element) => {
            await practice.collection('part6Detail').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}
const AddPart7Detail = async(part7Detail, practice) => {
    try {
        await Promise.all(part7Detail.map(async(element) => {
            await practice.collection('part7Detail').add(element);
        }))
    } catch (error) {
        console.log(error);
    }
}

const getListUpcommingElement = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const listPractce = await adminPractice.listDocuments();
            const listReturn = [];
            await Promise.all(listPractce.map(async(element) => {
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
                            userCount: 0
                        };
                        listReturn.push(object);
                    }
                })

            }))
            resolve(listReturn);
        } catch (error) {
            console.log(error);
            reject([])
        }

    })
}

exports.GetListPractice = async(req, res) => {
    try {
        const listPractce = await adminPractice.listDocuments();
        const listReturn = [];
        await Promise.all(listPractce.map(async(element) => {
            await adminPractice.doc(element.id).get().then(snapshot => {
                var object = {
                    status: snapshot.get('status'),
                    title: snapshot.get('title'),
                    idData: snapshot.get('idData'),
                    decription: snapshot.get('decription'),
                    time: snapshot.get('time'),
                    userCount: 0
                };
                object.studentCount =
                    listReturn.push(object);
            })

        }))
        return res.json(
            listReturn
        );
    } catch (error) {
        return res.status(500).send(error);
    }

}



exports.GetListPracticeHistory = async(req, res) => {
    try {
        const listPractce = await adminPractice.listDocuments();
        const listReturn = [];
        var d = new Date();
        var n = d.getTime();
        await Promise.all(listPractce.map(async(element) => {
            await adminPractice.doc(element.id).get().then(async(snapshot) => {
                if (snapshot.get('time') <= n) {
                    var object = {
                        status: false,
                        title: snapshot.get('title'),
                        idData: snapshot.get('idData'),
                        decription: snapshot.get('decription'),
                        time: snapshot.get('time'),
                    };
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
        return res.json(
            listReturn
        );
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }

}

exports.GetListPracticeComming = async(req, res) => {
    try {
        var listReturn = await getListUpcommingElement();
        return res.json(
            listReturn
        );
    } catch (error) {
        return res.status(500).send(error);
    }

}

exports.Result = (req, res) => {
    try {
        const object = req.body;
        const idPractice = object.idData;

        const docPractice = adminPractice.doc(idPractice);
        const collectionPractice = docPractice.collection('listResult');
        collectionPractice.add(object)

        return res.json({
            data: object
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.GetResult = async(req, res) => {

    // var idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNkOWNmYsdWE4OGVmMDViNDI0YmU2MjA1ZjQ2YjE4OGQ3MzI1N2JjNDIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmd1eeG7hW4gWHXDom4gTmFtIiwicGljdHVyZSI6Imh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLzI3MzAzNTM3NTcyNzY4MDEvcGljdHVyZSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b2VpYy1zZWIiLCJhdWQiOiJ0b2VpYy1zZWIiLCJhdXRoX3RpbWUiOjE2MjE3NjAxMDYsInVzZXJfaWQiOiJRTXBLcDVyTVNMWUhnbk1LVHVGMEZzSGQzWUIyIiwic3ViIjoiUU1wS3A1ck1TTFlIZ25NS1R1RjBGc0hkM1lCMiIsImlhdCI6MTYyMTc2MzQwNywiZXhwIjoxNjIxNzY3MDA3LCJlbWFpbCI6InRlbzEyMDExOTk5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMjczMDM1Mzc1NzI3NjgwMSJdLCJlbWFpbCI6WyJ0ZW8xMjAxMTk5OUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJmYWNlYm9vay5jb20ifX0.GSyWEbo3iofIIPtM5k2rfsKIe5gMgVb-69-msgaThYI2eod0T4TGt691JF_llxIJqdUm-7bRWOefps7-9yaqfS83spN2oyLJeJPeHtOY7EGSaHo-4iJGeF-8Or3o8NdUogL48rIvMtL6Rz-5O66bDDoRgHUvVn7OULIyKHV6f-laQMzQOOWQFl1TEgod1Gh7MIAtherw6aqahC8IHV4rZtKVLT8d6jIHeXysp62LbT8Uc69GMFr5Co6rVvFuoN9lmkBmfFe_uhnvkkCj-CgWlUHzGn0IdSu9BpQXsQTCTaa4AY8hdpKKNqqjMi3IYnHIXevLQNA7iSRHqB8V7mjdZA';
    // admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    //     console.log('ID Token correctly decoded', decodedIdToken);
    //     admin.auth().getUser(decodedIdToken.uid).then((userRecord) => {
    //         console.log(userRecord);

    //     }).catch(error => {
    //      console.error('Error while getting Firebase User record:', error);
    //      res.status(403).json({error: 'Unauthorized'});
    //     });
    //    }).catch(error => {
    //     console.error('Error while verifying Firebase ID token:', error);
    //     res.status(403).json({error: 'Unauthorized'});
    //    });
    try {
        console.log(req.params.id);
        const collectionPractice = await adminPractice.doc(req.params.id).collection('listResult').orderBy('amountCorrect', 'desc').limit(15).get();
        const listResult = [];
        collectionPractice.forEach(element => {
            listResult.push(element.data());
        })
        return res.json(
            listResult
        );
    } catch (error) {
        return res.status(500).send(error);
    }
}
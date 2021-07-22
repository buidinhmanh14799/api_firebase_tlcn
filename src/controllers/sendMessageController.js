const { admin, admindbVocabulary } = require('../firebase/firebase-confix');

exports.sendMessagePackage = (req, res) => {
    console.log('notifica_package');
    try {
        const messages = [];
        messages.push({
            notification: {
                title: req.body.title,
                body: req.body.text
            },
            topic: 'notifica_package',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                res.status(200).send({
                    status: true,
                    messages: 'send data compelete!'
                });
            });
    } catch (error) {
        res.status(500).send({
            status: false,
            messages: error.messages
        });
    }

}
exports.sendMessageVoca = (req, res) => {
    try {
        const messages = [];
        messages.push({
            notification: {
                title: req.body.title,
                body: req.body.text
            },
            topic: 'notifica_voca',
        });

        admin.messaging().sendAll(messages)
            .then(() => {
                res.status(200).send({
                    status: true,
                    messages: ' messages were sent successfully'
                });
            });
    } catch (error) {
        res.status(500).send({
            status: false,
            messages: error.messages
        });
    }

}
exports.sendMessageVocaRandom = async (req, res) => {
    try {
        console.log('vao');
        const arrayCloudVoca = [];
        const arrayCloud = await admindbVocabulary.collection('data').get();
        arrayCloud.forEach(element => {
            arrayCloudVoca.push(element.data());
        });
        var item = arrayCloudVoca[Math.floor(Math.random() * arrayCloudVoca.length)];
        console.log(item)
        const messages = [];
        messages.push({
            notification: {
                title: 'Ôn luyện từ vựng 🤯',
                body: item.Voca + ' --> ' + item.Mean
            },
            topic: 'notifica_voca',
        });

        admin.messaging().sendAll(messages)
            .then((response) => {
                console.log(response.successCount + ' messages were sent successfully');
                res.status(200).send({
                    status: true,
                    messages: ' messages were sent successfully'
                });
            })
    } catch (error) {
        res.status(500).send({
            status: false,
            messages: error.messages
        });
    }

}
exports.sendMessageAdmin = (req, res) => {
    try {
        const messages = [];
        messages.push({
            notification: {
                title: req.body.title,
                body: req.body.text
            },
            topic: 'NotificaAdmin',
        });

        admin.messaging().sendAll(messages)
            .then(() => {
                res.status(200).send({
                    status: true,
                    messages: ' messages were sent successfully'
                });
            });
    } catch (error) {
        res.status(500).send({
            status: false,
            messages: error.messages
        });
    }

}

// exports.sendMessageAdmin = (req, res) => {
//     const  t = true;
//     function sendVoca(){
//         console.log('manh');
//         const messages = [];
//         messages.push({
//             notification: {
//                 title: 'test',
//                 body: 'manh'
//             },
//             topic: 'notifica_package',
//         });
//         admin.messaging().sendAll(messages)
//             .then((response) => {
//                 console.log(response.successCount + ' messages were sent successfully');
//                 t = false
//                 setTimeout(()=>{
//                     sendVoca()
//                 }, 2000);
//             });
//     }
//     sendVoca();

// }
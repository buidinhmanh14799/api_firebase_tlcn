const { admin, admindbVocabulary } = require('../firebase/firebase-confix');

exports.sendMessagePackage = (req, res) => {
    console.log('NotificaPackage');
    const messages = [];
    messages.push({
        data: {
            type: 'PracticeOnline',
        },
        notification: {
            title: req.body.title,
            body: req.body.text
        },
        topic: 'PracticeOnline',
    });

    admin.messaging().sendAll(messages)
        .then((response) => {
            console.log(response.successCount + ' messages were sent successfully');
            res.send('oke');
        });
}
exports.sendMessageVoca = (req, res) => {
    const messages = [];
    messages.push({
        data: {
            type: 'NotificaVoca',
        },
        notification: {
            title: req.body.title,
            body: req.body.text
        },
        topic: 'NotificaVoca',
    });

    admin.messaging().sendAll(messages)
        .then((response) => {
            console.log(response.successCount + ' messages were sent successfully');
            res.send('oke');
        });
}
exports.sendMessageVocaRandom = async (req, res) => {
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
        data: {
            type: 'NotificaVoca',
        },
        notification: {
            title: 'Ôn luyện từ vựng 🤯',
            body: item.Voca + ' --> ' + item.Mean
        },
        topic: 'NotificaVoca',
    });

    admin.messaging().sendAll(messages)
        .then((response) => {
            console.log(response.successCount + ' messages were sent successfully');
            return res.status(200).json({
                send: true,
                Vocabulary: item
            });
        }).catch(err => {
            return res.status(500).json({
                send: false,
                messages: err + ''
            });
        });
}
exports.sendMessageAdmin = (req, res) => {
    const messages = [];
    console.log(req.body.title);
    messages.push({
        data: {
            type: 'NotificaAdmin',
        },
        notification: {
            title: req.body.title,
            body: req.body.text
        },
        topic: 'NotificaAdmin',
    });

    admin.messaging().sendAll(messages)
        .then((response) => {
            console.log(response.successCount + ' messages were sent successfully');
            res.send('oke');
        });
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
//             topic: 'NotificaPackage',
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
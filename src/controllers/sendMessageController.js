const { admin } = require('../firebase/firebase-confix');

exports.sendMessagePackage = (req, res) => {
    console.log('manh');
    const messages = [];
    messages.push({
        notification: {
            title: req.body.title,
            body: req.body.text
        },
        topic: 'NotificaPackage',
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
// exports.sendMessageAdmin = (req, res) => {
//     const messages = [];
//     console.log(req.body.title);
//     messages.push({
//         notification: {
//             title: req.body.title,
//             body: req.body.text
//         },
//         topic: 'NotificaAdmin',
//     });

//     admin.messaging().sendAll(messages)
//         .then((response) => {
//             console.log(response.successCount + ' messages were sent successfully');
//             res.send('oke');
//         });
// }

exports.sendMessageAdmin = (req, res) => {
    const  t = true;
    function sendVoca(){
        console.log('manh');
        const messages = [];
        messages.push({
            notification: {
                title: 'test',
                body: 'manh'
            },
            topic: 'NotificaPackage',
        });
        admin.messaging().sendAll(messages)
            .then((response) => {
                console.log(response.successCount + ' messages were sent successfully');
                t = false
                setTimeout(()=>{
                    sendVoca()
                }, 2000);
            });
    }
    sendVoca();
    
}
const nodemailer = require('nodemailer');

exports.sendmail = function (req, res) {
    console.log(req.body)
    //Tiến hành gửi mail, nếu có gì đó bạn có thể xử lý trước khi gửi mail
    var transporter = nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'MPMShopOnline@gmail.com', //Tài khoản gmail vừa tạo
            pass: 'Hoilamgi3' //Mật khẩu tài khoản gmail vừa tạo
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    var content = '';
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Mã xác minh để xác nhận tài khoản của bạn, hãy nhập mã này vào TOEIC SEB:</h4>
                <span style="color: black">`+req.body.code+`</span>
            </div>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/126087099_404604660892463_3184378675104284382_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=L3v8v-d6-1UAX9qCT_t&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=2d898676b1d4106063aee04fb64f6d2a&oe=5FDDB931">
        </div>
    `;
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Toeic Seb',
        to: req.body.email,
        subject: req.body.code +' là mã xác minh của bạn',
        text: 'Mã xác nhận tài khoản',//Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
        html: content //Nội dung html mình đã tạo trên kia :))
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            req.flash('mess', 'Lỗi gửi mail: ' + err); //Gửi thông báo đến người dùng
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            // req.flash('mess', 'Một email đã được gửi đến tài khoản của bạn'); //Gửi thông báo đến người dùng
            // res.redirect('/');
            res.send("send Oke")
        }
    });
}
const nodemailer = require('nodemailer');

exports.sendmail = function (req, res) {
    console.log(req.body)
    //Tiến hành gửi mail, nếu có gì đó bạn có thể xử lý trước khi gửi mail
    var transporter = nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'toeicseb@gmail.com', //Tài khoản gmail vừa tạo
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
            <img src="https://firebasestorage.googleapis.com/v0/b/toeic-seb.appspot.com/o/image%2FScreenshot_2021-07-07-20-13-34-84_ff5bc5773211b68c8343f71017499cd1.jpg?alt=media&token=8dc22dd3-e5c5-4a5e-8021-74aafeaa1165">
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
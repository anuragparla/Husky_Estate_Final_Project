const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = ({name, message, email, address}) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env["EMAIL"],
            pass: process.env['PASS']
        }
      });

      message = {
        from: "test.nshmadhani@gmail.com",
        to: "nshmadhani@gmail.com",
        subject: "Enquiry Made by "+name + " for "+address,
        text: `A Enquiry has been made by user: ${name} for property ${address}.\n Message\n${message}`
   }
   transporter.sendMail(message, function (err, info) {
        if (err) {
          console.log(err)
        } else {
         
         }
   });
}


module.exports = {
    sendEmail 
}
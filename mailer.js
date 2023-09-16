const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // you can change it to your email service 
    port: 465,
    secure: true,
    auth: {
      user: 'your email',
      pass: 'your password'
    }
  });

  const mailOptions = {
    from: 'your email ',
    to: 'recipient email ',
    subject: 'subject',
    text: 'message',
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
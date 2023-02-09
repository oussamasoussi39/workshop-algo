const nodemailer = require('nodemailer');

// Define the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: 'oussamasoussi51@gmail.com',
    pass: "xxxxxx"
  }
});

const mailOptions = {
  from: 'oussamasoussi51@gmail.com',
  to: ' oussamasoussi51@gmail.com',
  subject: 'Test email from Node',
  text: 'Hello from Node.js'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
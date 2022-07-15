const nodemailer = require('nodemailer')
require('dotenv').config();

// Transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOptions = {
    from: 'gisthive@gmail.com',
    to: 'technicaldeeofficial@gmail.com',
    subject: 'Testing my Zuri Nodemailer',
    text: 'Wow... It works'
}

transporter.sendMail(mailOptions)
    .then(function(response){
        console.log('Email Sent')
    })
    .catch(function(error){
        console.log('Error: ', error)
    });
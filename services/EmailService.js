const fs = require('fs')
const nodemailer = require('nodemailer')

const createGmailTransport = (sender) => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: sender.email,
      pass: sender.password
    }
  })
}

const sendEmail = async (transporter, message) => {
  try {
    console.log('transporter', transporter)
    console.log('message', message)
    let result = await transporter.sendMail(message)
    console.log('Mail sent: %s', result.messageId)
  } catch (err) {
    console.log('Error occurred while sending mails. ' + err.message)
  }
}

let reciever = 'hijic61289@cantouri.com'

let sender = {
  email: 'email',
  password: 'password'
}

// create transporter for Gmail account
let transporter = createGmailTransport(sender)

// Message object
let message = {
  from: sender.email,
  to: reciever,
  subject: 'Nodemailer is unicode friendly ✔',
  text: 'Hello to myself!',
  html: '<p><b>Hello</b> to myself!</p>',
  attachments: [
    {
      filename: 'sample.pdf',
      content: fs.createReadStream('../files/sample.pdf'),
      contentType: 'application/pdf'
    },
    {
      filename: 'sampleaudio.mp3',
      content: fs.createReadStream('../files/sampleaudio.mp3'),
      contentType: 'audio/mpeg'
    }
  ]
}

// send email
sendEmail(transporter, message)

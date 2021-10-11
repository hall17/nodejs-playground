// Twilio Sms Service
const accountSid = 'accountSid';
const authToken = 'authToken';
const client = require('twilio')(accountSid, authToken);

let trialPhoneNumber = '+13344542204'
let to = '+905555555555'


const sendMessage = async (message) => {

    try {
        let result = await client.messages.create(message)
        console.log('result', result)

    } catch (error) {
        console.error('Error occurred while sending sms', error)
    }
}

let message = {
    body: 'Test message from twilio',
    from: trialPhoneNumber,
    to: to
}

sendMessage(message)
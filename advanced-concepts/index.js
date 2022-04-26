const crypto = require('crypto')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('It comes with delay')
    })
})

app.get('/fast', (req, res) => {
    res.send('This was fast')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})



// pm2 start index.js -i 0
// pm2 delete index
// pm2 monit
// pm2 list
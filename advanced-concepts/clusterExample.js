const cluster = require('cluster')
const crypto = require('crypto')
// this does not work for windows
process.env.UV_THREADPOOL_SIZE = 1

if (cluster.isMaster) {
    // Cause index.js to be executed again but in child mode
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()

    // creating many clusters comes with a performance cost
} else {
    // I am a child, I am going to act like a server
    console.log('Child instance is present')
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
}

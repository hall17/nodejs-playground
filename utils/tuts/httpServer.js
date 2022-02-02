// We include the http module.
// We use the module to create an HTTP server.
// The server is set to listen on the specified port, 3000. When the server is ready, the listen callback function is called.

// The callback function we pass is the one that's going to be executed upon every request that comes in.
// Whenever a new request is received;
//the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).
const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
  console.log('listening on port: ', port)
})

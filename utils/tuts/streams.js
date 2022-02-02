// Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

// In the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.
// Using streams you read it piece by piece, processing its content without keeping it all in memory.

const Stream = require('stream')
const readableStream = new Stream.Readable()

readableStream._read = () => {}

const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

// process.stdin.pipe(writableStream)

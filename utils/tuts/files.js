const fs = require('fs')
const path = require('path')
let p = path.join(__dirname, '../../files', 'test.txt')

console.log(path.dirname(p)) // ../../files
path.basename(p) // test.txt
path.extname(p) // .txt
//
let filePath = path.join(__dirname, '../../files', 'test.txt')

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.log(err)
    return
  }
  // we have accessed the file
})

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

let addText = 'add this text'
fs.writeFile(filePath, addText, { flag: 'a+' }, (err) => {
  if (err) {
    console.error(err)
    return
  }
})

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

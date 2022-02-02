const buf = Buffer.from('Hey!')

for (let b of buf) {
  console.log(b) // 72 , 101, 121, 33
}

// Those numbers are the UTF-8 bytes that identify the characters in the buffer (H → 72, e → 101, y → 121).
//  This happens because Buffer.from() uses UTF-8 by default.
//  Keep in mind that some characters may occupy more than one byte in the buffer (é → 195 169).

// print full content of a buffer
console.log(buf.toString())

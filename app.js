const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('API is runnin!!'))

app.listen(3000, () => {
  console.log('API is running on p 3000')
})

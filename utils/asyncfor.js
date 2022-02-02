const rp = require('request-promise')
const { logToFile } = require('./logger')

// Simulate api request
const timeout = (data, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms))
const timeoutReject = (data) =>
  new Promise((resolve, reject) => setTimeout(() => reject(data), 120))

const apiUrl = ''

function callApi(data) {
  let options = {
    method: 'GET',
    url: apiUrl,
    headers: {
      // 'Authorization': authorization,
      // 'Content-Type': 'application/json'
    }
    // body: data
  }
  return rp(options)
    .then((res) => {
      // Success
      return Promise.resolve(res)
    })
    .catch((err) => {
      return Promise.reject(new Error(err))
    })
}

// immediate function
;(function () {
  for (let i = 0; i < 10; i++) {
    setTimeout(async () => {
      try {
        console.log(`Task #${i} running`)
        logToFile('This log will be logged')
        let result = await timeout('result', 1500)
        console.log(`Result #${i}`)
      } catch (error) {}
    }, 500 * i)
  }
})()

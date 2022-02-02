// A company uses a Node.js application that checks several data sources for requested information.
// Since each request to a data source is performance heavy, the application should try to check the next source only if the request failed at the current data source. That functionality was extracted into the firstSuccessfulPromise function.

// The firstSuccessfulPromise function accepts an array of Promises as a promiseArray parameter.
// The function should return a Promise which should resolve to the first successful result from the promiseArray.

// If no Promise from the promiseArray returns successfully, the function should return undefined.

// For example, if the following code is executed:

// firstSuccessfulPromise([new Promise((resolve, reject) => reject()),
//               new Promise((resolve, reject) => resolve("Success!"))])
//   .then(result => console.log(result));
// It should print "Success!".

async function firstSuccessfulPromise(promiseArray) {
  // Write your code here
  for (let promise of promiseArray) {
    try {
      const res = await promise
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

let promise = firstSuccessfulPromise([
  new Promise((resolve, reject) => reject()),
  new Promise((resolve, reject) => resolve('Success!'))
])
promise.then((result) => console.log(result))

module.exports.firstSuccessfulPromise = firstSuccessfulPromise

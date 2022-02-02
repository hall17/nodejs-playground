// Implement the getInParallel function that should be used to invoke multiple API calls in parallel.
// The function accepts an array of functions that return a Promise.
// The function should return a Promise which should resolve to an array of results from the apiCalls argument.

// For example, calling the following code should print "[ 'First API call!', 'Second API call!' ]":

// let promise = getInParallel([() => Promise.resolve("First API call!"),
//                              () => Promise.resolve("Second API call!")]);
// if(promise) {
//   promise.then((result) => console.log(result)).catch((err) => console.log(err));
// }

async function getInParallel(apiCalls) {
  // Write your code here
  let result = await Promise.all(
    apiCalls.map(async (c) => {
      let res = await c()
      // console.log(res)
      return res
    })
  )
  return results
}

let promise = getInParallel([
  () => Promise.resolve('First API call!'),
  () => Promise.resolve('Second API call!')
])
if (promise) {
  promise.then((result) => console.log(result)).catch((err) => console.log(err))
}
module.exports.getInParallel = getInParallel

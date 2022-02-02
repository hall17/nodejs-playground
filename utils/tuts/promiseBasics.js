const createPromise = () =>
  new Promise((resolve, reject) => resolve('Success!'))
const createDelayedPromise = (t) =>
  new Promise((resolve, reject) => setTimeout(resolve('Success!'), t))

const wait = (t) => new Promise((resolve, reject) => setTimeout(resolve, t))
const reject = (t) => new Promise((resolve, reject) => setTimeout(reject, t))

const callApi = async () => {
  try {
    await wait(1500)
    // let result = await createPromise()
    // let result = await createDelayedPromise(500)
    let requests = []

    // create 10 api calls
    for (let i = 0; i < 10; i++) {
      let request = createDelayedPromise(500)
      requests.push(request)
    }
    let results = await Promise.all(requests)
    console.log(results)
  } catch (error) {
    console.log(error)
  }
}

callApi()

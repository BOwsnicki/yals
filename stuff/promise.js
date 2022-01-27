let p1 = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve(a)
    } else {
        reject(a)
    }
})

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('foo');
      }, 2000)
})

p1
.then((msg) => {
    console.log("Success: " + msg)
})
.catch((msg) => {
    console.log("Fail: " + msg)
})

p2
.then((msg) => {
    console.log("Success: " + msg)
})
.catch((msg) => {
    console.log("Fail: " + msg)
})

Promise.all([p1,p2])
.then(() => {
    console.log("got 'em")
})
.catch(() => {
    console.log("not really")
})
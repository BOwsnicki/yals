const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    return await doSomethingAsync()
  }
  
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2+3);
    }, 1000);
  });
  p1.then(console.log)

  /*
  const v = promise1.then((value) => {
    console.log(value);
  });
  v.then(console.log)
  */



  
/*
  console.log('Before')
  doSomething()
  console.log('After')
  */
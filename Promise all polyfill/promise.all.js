const promise1 = Promise.resolve(3);
const promise2 = 42;

const promise3 = new Promise((resolve) => {
 setTimeout(resolve, 100, "foo")
})

Promise.all([promise1, promise2, promise3]).then(values => {
 console.log(values);
})


Promise.myAll = function (values) {
 return new Promise((resolve, reject) => {
  let completed = 0;
  let results = [];
  values.forEach((value, index) => {
   Promise.resolve(value).then(result => {
    completed++;
    results[index] = result;
    if (completed === values.length) {
     resolve(results);
    }
   }).catch((error) => reject(error))
  });
 })
}

Promise.myAll([promise1, promise2, promise3, 78]).then(values => {
 console.log(values);
}).catch(err => console.log(err))

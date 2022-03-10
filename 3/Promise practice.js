// new Promise((resolve, reject) => {
//     console.log(0);
//     resolve(1);
//     console.log(2);
//     resolve(2);
//     reject("error");
// }).then(
//     (value) => {
//         console.log(value);
//     },
//     (error) => {
//         console.log("error");
//     }
// );

// From above code we undertsand that 1st resolve or reject will be used, rest will be ignored

// new Promise((resolve, reject) => {
//     console.log(0);
//     resolve(1);
//     console.log(2);
//     resolve(2);
//     reject("error");
//     console.log("last");
// }).then(
//     (value) => {
//         console.log(value);
//     },
//     (error) => {
//         console.log("error");
//     }
// );

// new Promise((resolve, reject) => {
//     console.log(0);
//     resolve(
//         setTimeout(() => {
//             console.log(1);
//         }, 2000)
//     );
//     console.log(2);
//     resolve(3);
//     reject("error");
//     console.log("last");
// }).then(
//     (value) => {
//         console.log(value);
//     },
//     (error) => {
//         console.log("error");
//     }
// );

// new Promise((resolve, reject) => {
//     return resolve(1);
// }).finally((data) => {
//     console.log(data);
// });

//

// new Promise((resolve, reject) => {
//         return resolve(1);
//     })
//     .finally((data) => {
//         console.log(data);
//     })
//     .then((data) => {
//         console.log(data);
//     });

// From above 2 example we can see tht finally get excecuted before the promise is executed, so we get undefined in finally.
// But then is always executed after the promise is excuted.

new Promise((resolve, reject) => {
        return resolve(1);
    })
    .finally((data) => {
        console.log(data);
        return Promise.resolve(2);
    })
    .then((data) => {
        console.log(data);
    });

new Promise((resolve, reject) => {
        return resolve(1);
    })
    .finally(() => {
        console.log("Hey i am finally! doing nothing, just confusing you");
    })
    .then((data) => {
        console.log(data);
    });
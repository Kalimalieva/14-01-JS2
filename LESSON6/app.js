// setTimeout (() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 1000);

// }, 1000);// callback hall

// setTimeout(() => {
//     console.log("loading");
//     const product = {
//         name: "Phone", 
//         price: "4000"
//     };
//     setTimeout (() => {
//         product.status = "ordered";
//         console.log(product);
//     }, 2000)
// }, 2000)


// const resolveData = (product) => {
//     setTimeout(() => {
//         product.status = "ordered";
//         console.log(product);
//     }, 2000)
// }

// req.then(resolveData)


// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("loading");
//         const product = {
//             name: "Phone",
//             price: "4000"
//         };
//         resolve(product)
//     }, 2000)
// });


// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = "ordered";
//             console.log(product, "1");
//             resolve();
//             // reject()
//         }, 2000);
//     })
//     // }).catch(() => {
//     //     console.log("error");
//     // })
//     .then(() => {
//         product.isModified = true;
//         console.log(product, "2");
//     }).finally (() => {
//         console.log("123");
//     })
// });// Promise


fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(json => console.log(json))

  
// function varTest() {
//     var x = 1;
//     if(true) {
//         var x = 2;
//         console.log(x);
//     }
//     console.log(x);
// };

// varTest();


// function letTes () {
//     let x = 1;
//     if(true) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// letTes();


// const doHome = (subject, callback) => {
//     alert(`Starting my ${subject} homework`);
//     callback()
// };

// const homeworkFinished = () => {
//     alert("my homework is finished");
// };

// doHome("math", homeworkFinished);

// const btn = document.querySelectorAll("button");
// console.log(btn);
// btn.forEach((item) => {
//     console.log(item);
//     item.addEventListener("click", (event) => {
//         console.log(event.target);
//         if(event.target.classList.contains("red")){
//             event.target.classList.remove("red")
//         }else{
//             event.target.classList.add("red")
//         }
//     })
// })
// const wrapper = document.querySelector(".btns")
// const newbtn = document.createElement("button")
// wrapper.append(newbtn)

// wrapper.addEventListener("click", (event) => {
//     if(event.target.tagName === "BUTTON") {
//         console.log(event.target);
//         console.dir(event.target)
//         if(event.target.classList.contains("red")) {
//             event.target.classList.remove("red")
//         }else{
//             event.target.classList.add("red")
//         }
//     }
// })


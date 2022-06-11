// let string = prompt('tell me your name')
//
// let regExp = /y/i;
//
// console.log(string.match(regExp));

// const letter = "AAaaBsdaaAubbbdddd";
//
// const regExp = /d/gi;// ishet vse chto nujno iz srdi bukv
//
// console.log(letter.match(regExp));

// d w
//
// const letter = "112fffbgdtdeegrfs33455667";
// const regExp = /\d/g;// d sozdan dlya poiskah vseh zifr
// console.log(letter.match(regExp))
// console.log(letter)
// console.log(letter.replace(regExp, "*"))


// const letter = "112fffbgdtdeegrfs33455667";
// const regExp = /\w/g;// d sozdan dlya poiskah vseh
// console.log(letter.match(regExp))
// console.log(letter)
// console.log(letter.replace(regExp, "*"))

// const phoneInput = document.querySelector(".phoneInput")
// const phoneCheck = document.querySelector(".phoneCheck")
// const phoneResult = document.querySelector(".phoneResult")

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

// phoneCheck.addEventListener("click", () => {
//     if (phoneRegExp.test(phoneInput.value)) {
//         phoneResult.innerText  = "ok"
//         phoneResult.style.color = "green"
//     }else{
//         phoneResult.innerText = "not ok"
//         phoneResult.style.color = "red"
//     }
// })


// let num = 0
// const count = () => {
//     num++
//     console.log(num)
//     if (num < 70) {
//         return count()
//     }
// }
// count()

// const people = {
//     John: {
//         age: 25,
//         parents:{
//             Kelly:{
//                 age:45,
//             },
//             Tony: {
//                 age:45,
//                 parents: {
//                     Din:{
//                         age:65,
//                     },
//                 },
//             },
//         },
//     },
//     Sam: {
//         age:45,
//         parents: {
//             Jean: {
//                 age:35,
//             },
//             Kayl: {
//                 age:35,
//                 parents: {
//                     Stive: {
//                         age:20,
//                     },
//                 },
//             },
//         },
//     },
// }
// console.log(people)

// const parentList = (obj) => {
//     if (obj.parents) {
//         for (let key in obj.parents) {
//             console.log(key)
//             parentList(obj.parents[key])
//         }
//     }
// }

// for (let key in people) {
//     parentList(people[key])
// }
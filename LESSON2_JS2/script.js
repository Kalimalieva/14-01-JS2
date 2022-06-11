// let num = 0;

// const count = () => {
//     num++;
//     console.log(num);
//     if(num < 100) {
//         count()
//     }
// }
// count()

// const block = document.querySelector(".block")
// const blockMove = document.querySelector('.blockMove')

// let position = 0;

// const blockMoveAction = () => {
//     position += 15;
//     block.style.left = `${position}px`;
//     if(position <= 480){
//         blockMoveAction()
//     }
// }

// blockMove.addEventListener("click", () => {
//     blockMoveAction()
// })

// const block = document.querySelector(".block")
// const blockMove = document.querySelector('.blockMove')

// let position = 0;
// let topPosition = 0;

// const blockMoveAction = () => {
//     position += 15;
//     block.style.left = `${position}px`;
//     if(position <= 480){
//         setTimeout(blockMoveAction, 100)
//     }else if (position >= 480 && topPosition <= 480){
//         topPosition += 15
//         block.style.top = `${topPosition}px`;
//         setTimeout(blockMoveAction, 100)
//     }
// }

// blockMove.addEventListener("click", () => {
//     blockMoveAction()
// })

// console.log ('hi')
// //settimout

// const hi = () => {
//     console.log("h2");
// };

// setTimeout(hi, 0);

// const interval = setInterval(()=>{
//     console.log('inter')
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 6000)


// const func = (num) => {
//     const culc = () =>{
//         console.log(1000 * num);
//     };
//     culc()
// }

// func(8)

const func = (n) => {
    console.log(n, "n")
    return function (num){
        console.log(num, "num")
        return n + num;
    }
}
const one = func(1)
const two = func (10)

console.log(one(14), "result");
console.log(two(3), "result");

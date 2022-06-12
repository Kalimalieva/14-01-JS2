const innInput = document.querySelector(".innInput");
const btnCheck = document.querySelector(".btnCheck");
const innResult = document.querySelector(".innResult");

const innRegExp = /^(0||1)\d{13}$/


btnCheck.addEventListener("click", () => {
    if (innRegExp.test(innInput.value)) {
        innResult.innerText = "very good!";
        innResult.style.color = "blue";
        innResult.style.margin = "25px";
        innResult.style.fontSize = "30px";
        innResult.style.fontFamily = "cursive";
    }else {
        innResult.innerText = "enter again!";
        innResult.style.color = "yellow";
        innResult.style.margin = "25px";
        innResult.style.fontSize = "30px";
    }
});


//------------------------------------------ HW-2

const posDiv = document.querySelector('.box');
const clickBtn = document.querySelector('.clickMe');

let num = 0;

const clickBtnAction = () => {
    num += 15;
    posDiv.style.left = `${num}px`;

    if(num <= 480) {
        clickBtnAction()
    }
}

clickBtn.addEventListener("click", () => {
    clickBtnAction()
})








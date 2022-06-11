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
const rel = document.querySelector('.relative')
const posDiv = document.querySelector('.position');

let num = 0;
const right = ()=>{
  num++
  if(posDiv.style.left!=="700px"){
    posDiv.style.left = num + "px"
    return right()
  }
}
right()








// window.addEventListener("scroll", () => {
//     console.log(window.pageYOffset);
// });// scroll

const obj3 = {
    name: "John",
    age: 20
}


console.log(obj3);
const data = JSON.stringify(obj3)// prevrashaetsya v stroku
console.log(data);
console.log(JSON.parse(data));



const btn = document.querySelector('.btn');

btn.addEventListener("click", () => {
    const reqest = new XMLHttpRequest();// sozdanie zaprosa
    reqest.open("GET", "data.json");//tip zaprosa \ server
    reqest.setRequestHeader("Content-type", "application/json");//tip dannyh zaprosa
    reqest.send();//otpravka zaprosa na server
    reqest.addEventListener("load", () => {// ojidanie zaprosa 
        const data = JSON.parse(reqest.response)// prinimaem dannie c servera
        console.log(reqest.response);// rezultat// neobrabotanniy
        console.log(data);// obrabotanniy
        document.querySelector (".name").innerHTML = data.name;
        document.querySelector (".age").innerHTML = data.age;
    });
});


// null, undefined, boolean, string, number, nan// primitive
// object, array, function

const num = 5;
const num2 = num + 10;
console.log(num);
console.log(num2);

const obj = {
    name: "Alex",
    num: "+996550888888"
};

console.log(obj);

const obj2 = {...obj};// restrukturizaziya operator spread
obj2.name = "John";
console.log(obj2);



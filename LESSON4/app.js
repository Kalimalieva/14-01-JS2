
// const btn = document.querySelector('.btn');

// btn.addEventListener("click", () => {
//     const reqest = new XMLHttpRequest();// sozdanie zaprosa
//     reqest.open("GET", "data.json");//tip zaprosa \ server
//     reqest.setRequestHeader("Content-type", "application/json");//tip dannyh zaprosa
//     reqest.send();//otpravka zaprosa na server
//     reqest.addEventListener("load", () => {// ojidanie zaprosa 
//         const data = JSON.parse(reqest.response)// prinimaem dannie c servera
//         console.log(reqest.response);// rezultat// neobrabotanniy
//         console.log(data);// obrabotanniy rezultat
//         document.querySelector (".name").innerHTML = data.name;
//         document.querySelector (".age").innerHTML = data.age;
//     });
// });




let http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "Text/plain"});
        response.end("Hello world")
    })
    .listen(8080);
    console.log("server running at http://127.0.0.1:8080");

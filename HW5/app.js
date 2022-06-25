// const som = document.querySelector("#som");
// const usd = document.querySelector("#usd");
// const euro = document.querySelector("#euro")

// function convert(elem, target, isTrue, isTrue2){
//     elem.addEventListener("input", () => {
//         const request = new XMLHttpRequest();
//         request.open("GET", "data.json");
//         request.setRequestHeader("Content-type", "application/json");
//         request.send();
//         request.addEventListener("load", () => {
//             const response = JSON.parse(request.response);
//             if (isTrue){
//                 target.value = (elem.value / response.usd).toFixed(2);
//             }else{
//                 target.value = (elem.value * response.usd).toFixed(2);
//             };
//             elem.value === "" ? (target.value = ""): null;
//         });
//         elem.addEventListener("input", () => {
//             const requestEuro = new XMLHttpRequest();
//             requestEuro.open("GET", "data.json");
//             requestEuro.setRequestHeader("Content-type", "application/json");
//             requestEuro.send();
//             requestEuro.addEventListener("load", () => {
//                 const responseEuro = JSON.parse(requestEuro.responseEuro);
//                 if (isTrue2) {
//                     target.value = (elem.value / responseEuro.euro).toFixed(2);
//                 }else{
//                     target.value =(elem.value * responseEuro.euro).toFixed(2)
//                 };
//                 elem.value === "" ? (target.value = ""): null
//             })
//         })
//     });
// };
// convert(som, usd, 12);// zeloe chislo
// convert (usd, som);
// convert(euro, usd, 12);
// convert(usd, euro);
// convert(som, euro, 12);
// convert(euro, som)

// const som = document.querySelector("#som");
// const usd = document.querySelector("#usd");
// const euro = document.querySelector("#euro")

// const convert = (elem, target, isTrue, isTrue2) => {
//     elem.addEventListener("input", () => {
//         const reqest = new XMLHttpRequest();
//         reqest.open("GET", "data.json");
//         reqest.setRequestHeader("Content-type", "application/json");
//         reqest.send();
//         reqest.addEventListener("load", () => {
//             const response = JSON.parse(reqest.response);
//             if (isTrue) {
//                 target.value = (elem.value / response.euro).toFixed(2);
//             } else {
//                 target.value = (elem.value * response.euro).toFixed(2);
//             };
//             elem.value === "" ? (target.value = "") : null;
//         });

//         elem.addEventListener("input", () => {
//             const request = new XMLHttpRequest();
//             request.open("GET", "data.json");
//             request.setRequestHeader("Content-type", "application/json");
//             request.send();
//             request.addEventListener("load", () => {
//                 const form = JSON.parse(reqest.form);
//                 if (isTrue2) {
//                     target.value = (elem.value / form.usd).toFixed(2);
//                 } else {
//                     target.value = (elem.value * form.usd).toFixed(2);
//                 }
//                 elem.value === "" ? (target.value = "") : null;
//             });
//         });
//     });
// };

// convert(som, usd, 12);// zeloe chislo
// convert (usd, som);

c = new Array();
n = new Array();
c[0] = 1;
n[0] = "USD";
c[1] = 0.95;
n[1] = "EUR";
c[2] = 80.01;
n[2] = "SOM";

function GiveResult()
{
    var res, vfrom, vto, vcash;
    vcash = document.getElementById("cash").value;
    vfrom = document.getElementById("from").value;
    vcash = vcash.replace(',', '\.');
    vcash = vcash.replace(' ', '');
    vcash = vcash.replace(' ', '');
    vto = document.getElementById("to").value;
    res = c[vto] * vcash / c[vfrom], 2;

    res = res.toFixed(2);
    res = res.toString();
    res = res.replace('\.', ',');
    res = "<span class='result'> Результат перевода: " + res + "</span>&nbsp;" + n[vto];

    document.getElementById("result").innerHTML = res;
}
// lev1_1

let age = document.getElementById("age");
let result;

function adult() {
    if (age.value >= 18) {
        result = "volljährig";
    }
    else {
        false;
        result = "minderjährig";
    }
    out.innerHTML = result;
}


// lev1_2
let weatherData = document.getElementById("weatherData");
let res;

console.log(weatherData);

function weather() {
    if (weatherData.value >= 8) {
        console.log(weatherData.value)
        res = "super";
        console.log(res);
    }
    else if (weatherData.value == 6 || weatherData.value == 7) {
        res = "good";
    }
    else if (weatherData.value <= 3) {
        res = "ok";
    }
    else {
        res = "bad";
    }
    rating.innerHTML = res;

}

// lev1_2
let input = document.getElementById("input");
console.log(input);
let ausgabe;

function greaterThan() {
    console.log(input.value);
    if (input.value >= 18) {
        ausgabe = "Ja, du darfst Shisha rauchen";
    }
    else {
        ausgabe = "Sorry, no Shisha for you";

    }
    txtAusgabe.innerHTML = ausgabe;
}

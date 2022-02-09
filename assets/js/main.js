// lev1_1

let age = document.getElementById("age");
let result;

function adult() {
    if (age.value >= 18) {
        result = "You are adult";
    }
    else {
        false;
        result = "Sorry, drivers license yet for you";
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


// lev2_2

let slider = document.getElementById("myRange");
let concern = document.getElementById("concern");
let effect = document.getElementById("effect");
let container = document.querySelector(".slidecontainer");
let val = document.querySelector(".airValue");
console.log(val);


function checkAirQuality() {
    console.log(slider.value);
    if (slider.value <= 50) {
        concern.innerHTML = "Level of health concern: Good";
        effect.innerHTML = "Level of health effect: Little or no risk";
        container.style.background = "rgb(204, 233, 197)";

    }
    else if (slider.value > 50 && slider.value <= 100) {
        concern.innerHTML = "Level of health concern: Moderate";
        effect.innerHTML = "Level of health effect: Acceptable quality";
        container.style.background = "rgb(220, 221, 129)";
    }
    else {
        concern.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        effect.innerHTML = "Level of health effect: Generable publics not likely affected";
        container.style.background = "rgb(230, 142, 102)";
    }
    val.innerHTML = slider.value;

}


// lev2_3
let resultDiff;
function diff(numb) {
    resultDiff = numb - 27;
    if (resultDiff > 27) {
        resultDiff * 2;
    }
    else {
        resultDiff;
    }
    return resultDiff;
}

console.log(diff(123));

// lev2_4
let resultSum;

function sum(number1, number2) {
    resultSum = number1 + number2
    if (number1 === number2) {
        resultSum *= 5;
    }
    return resultSum;
}

console.log(sum(5, 5))


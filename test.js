var start = 3;

function mush() {

console.log("mushroom");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 1 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}
var start = 3;

function bac() {

console.log("Oli");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 1.5 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}

var start = 3;

function pep() {

console.log("pep");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 2 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}
function extra() {

console.log("extra");

var currTotal = document.getElementById("tot").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }


    var newTotal = 2 + +currTotal;

    document.getElementById("tot").innerHTML = newTotal;
}
function CL() {
    console.log("CL");
     document.getElementById("tot").innerHTML = "0";
}
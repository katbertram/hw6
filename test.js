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

function MyFunction() {
    txt1 = document.getElementById("customorder").value;
    document.getElementById("constumorder1").innerHTML = txt1
}


function myFunction1() {
    txt1 = "Bell Peppers"
    document.getElementById("addcustom1").innerHTML = txt1;
}

function myFunction2() {
    txt2 = "Mushrooms"
    document.getElementById("addcustom2").innerHTML = txt2;
}

function myFunction3() {
    txt3 = "Bacon"
    document.getElementById("addcustom3").innerHTML = txt3;
}

function myFunction4() {
    txt4 = document.getElementById("topping1").value;
    document.getElementById("addcustom4").innerHTML = txt4;
}

function myFunction5() {
    txt5 = document.getElementById("topping2").value;
    document.getElementById("addcustom5").innerHTML = txt5;
}

function myFunction6() {
    txt6 = document.getElementById("topping3").value;
    document.getElementById("addcustom6").innerHTML = txt6;
}

function myFunction7() {
    txt5 = document.getElementById("topping4").value;
    document.getElementById("addcustom7").innerHTML = txt5;
}

function myFunction8() {
    txt8 = document.getElementById("topping5").value;
    document.getElementById("addcustom8").innerHTML = txt8;
}

var countA = 0;

function myFunctionA() {
    countA++;
    document.getElementById("totalbellpeppers").innerHTML = countA;
    document.getElementById("totalbellpepperscost").innerHTML = "$" + countA
}

var countB = 0;

function myFunctionB() {
    countB++;
    document.getElementById("totalmushrooms").innerHTML = countB;
    document.getElementById("totalmushroomscost").innerHTML = "$" + countB
}

var countC = 0;

function myFunctionC() {
    countC++;
    document.getElementById("totalbacon").innerHTML = countC;
    document.getElementById("totalbaconcost").innerHTML = "$" + countC
}

var countD = 0;

function myFunctionD() {
    countD++;
    document.getElementById("total1").innerHTML = countD;
    document.getElementById("total1cost").innerHTML = "$" + countD
}

var countE = 0;

function myFunctionE() {
    countE++;
    document.getElementById("total2").innerHTML = countE;
    document.getElementById("total2cost").innerHTML = "$" + countE
}

var countF = 0;

function myFunctionF() {
    countF++;
    document.getElementById("total3").innerHTML = countF;
    document.getElementById("total3cost").innerHTML = "$" + countF
}

var countG = 0;

function myFunctionG() {
    countG++;
    document.getElementById("total4").innerHTML = countG;
    document.getElementById("total4cost").innerHTML = "$" + countG
}

var countH = 0;

function myFunctionH() {
    countH++;
    document.getElementById("total5").innerHTML = countH;
    document.getElementById("total5cost").innerHTML = "$" + countH
}

var counter = 0;
var a = 0;
var add = function(valueToAdd) {
    a += valueToAdd;
    b = a * 0.12
    c = a + b
    document.getElementById('Subtotal').innerHTML = a;
    document.getElementById('Tax').innerHTML = b;
    document.getElementById('Total').innerHTML = c;
}

function myFunctionResetTotals() {
    var a = 0;
    var b = 0;
    var c = 0;
    document.getElementById("Subtotal").innerHTML = a;
    document.getElementById("Tax").innerHTML = b;
    document.getElementById("Total").innerHTML = c;
}

function myFunctionThanks() {
    alert('Your order has been submitted - Thank You!');
}

function myFunctionResetTXT() {
    txt1 = "";
    txt2 = "";
    txt3 = "";
    txt4 = "";
    txt5 = "";
    txt6 = "";
    txt7 = "";
    txt8 = "";
    document.getElementById("addcustom1").innerHTML = txt1;
    document.getElementById("addcustom2").innerHTML = txt2;
    document.getElementById("addcustom3").innerHTML = txt3;
    document.getElementById("addcustom4").innerHTML = txt4;
    document.getElementById("addcustom5").innerHTML = txt5;
    document.getElementById("addcustom6").innerHTML = txt6;
    document.getElementById("addcustom7").innerHTML = txt7;
    document.getElementById("addcustom8").innerHTML = txt8;
}

function myFunctionResetUnits() {
    var1 = 0;
    var2 = 0;
    var3 = 0;
    var4 = 0;
    var5 = 0;
    var6 = 0;
    var7 = 0;
    var8 = 0;
    document.getElementById("totalbellpeppers").innerHTML = var1;
    document.getElementById("totalmushrooms").innerHTML = var2;
    document.getElementById("totalbacon").innerHTML = var3;
    document.getElementById("total1").innerHTML = var4;
    document.getElementById("total2").innerHTML = var5;
    document.getElementById("total3").innerHTML = var6;
    document.getElementById("total4").innerHTML = var7;
    document.getElementById("total5").innerHTML = var8;
}

function myFunctionResetToppingTotals() {
    var1 = 0;
    var2 = 0;
    var3 = 0;
    var4 = 0;
    var5 = 0;
    var6 = 0;
    var7 = 0;
    var8 = 0;
    document.getElementById("totalbellpepperscost").innerHTML = var1;
    document.getElementById("totalmushroomscost").innerHTML = var2;
    document.getElementById("totalbaconcost").innerHTML = var3;
    document.getElementById("total1cost").innerHTML = var4;
    document.getElementById("total2cost").innerHTML = var5;
    document.getElementById("total3cost").innerHTML = var6;
    document.getElementById("total4cost").innerHTML = var7;
    document.getElementById("total5cost").innerHTML = var8;
}
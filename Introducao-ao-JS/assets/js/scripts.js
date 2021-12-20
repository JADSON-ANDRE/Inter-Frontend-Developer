var numberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function decrementa() {
    numberWrapper.firstChild.nodeValue = currentNumber - 1;
    // currentNumber = currentNumber - 1;
    // numberWrapper.innerHTML = currentNumber;
}

function incrementa() {
    numberWrapper.firstChild.nodeValue = currentNumber + 1;
    // currentNumber = currentNumber + 1;
    // numberWrapper.innerHTML = currentNumber;
}

var dec = document.getElementById("counter");
change.addEventListener("subtrai", decrementa, false);
var cre = document.getElementById("counter");
change.addEventListener("adiciona", incrementa, false);
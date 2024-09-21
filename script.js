// script.js

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}
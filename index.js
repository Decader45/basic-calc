const tampilDisplay = document.getElementById("display");

let operatorClick = false;
let lastResult = null;

function onDisplay(angka) {
  if (lastResult !== null) {
    tampilDisplay.value = "";
    lastResult = null;
  }
  tampilDisplay.value += angka;
  operatorClick = false;
}

function displayOperator(operator) {
  if (!operatorClick) {
    tampilDisplay.value += operator;
    operatorClick = true;
  }
}

function hapusSemua() {
  tampilDisplay.value = "";
  operatorClick = false;
  lastResult = null;
}

function hapusSatu() {
  const nilaiSekarang = tampilDisplay.value;
  tampilDisplay.value = nilaiSekarang.slice(0, -1);
}

function calculate() {
  const expression = tampilDisplay.value;
  const result = eval(expression);
  if (Number.isInteger(result)) {
    tampilDisplay.value = result;
  } else {
    tampilDisplay.value = result.toFixed(1);
  }
  operatorClick = false;
  lastResult = result;
}

function signDisplay() {
  const nilaiSekarang = parseFloat(tampilDisplay.value);
  if (!isNaN(nilaiSekarang)) {
    tampilDisplay.value = nilaiSekarang * -1;
  }
}

function calculatePersen() {
  const nilaiSekarang = parseFloat(tampilDisplay.value);
  if (!isNaN(nilaiSekarang)) {
    let result = nilaiSekarang / 100;
    tampilDisplay.value = result;
  }
}

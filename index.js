function add() {
  1+80;
}

function subtract() {
  2-2;
}

function multiple() {
  5*6;
}
function devide() {
 10/2;
}

function add(a, b) {
  var addNum = a + b;
  return addNum;
}

function subtract(a, b) {
  var subNum = a - b;
  return subNum;
}

function multiply(a, b) {
  var multNum = a * b;
  return multNum;
}

function divide(a, b) {
  var divNum = a / b;
  return divNum;
}

function increment(n) {
  n++;
  return n;
}

function decrement(n) {
  n--;
  return n;
}

function makeInt(string) {
  parseInt('2.222', 10);
}

function preserveDecimal(string) {
  parseFloat(string);
}
preserveDecimal('2.222')
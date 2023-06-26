function add(a,b ){
  return a + b;
}
function subtract(a, b){
  return a - b;
}
function multiply(a, b){
  return a * b;
}
function divide(a, b){
  return a / b;
}

function increment(n){
  return n += 1;
}

function decrement(n){
  return n -= 1;
}

function makeInt(string){
  let parseString = parseInt(string, 10);
  return parseString;
}

function preserveDecimal(string){
  let parseString = parseFloat(string);
  return parseString;
}
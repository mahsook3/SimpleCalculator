let calculation = '';

function insert(value) {
  calculation += value;
  document.getElementById('result').value = calculation;
}

function clearAll() {
  calculation = '';
  document.getElementById('result').value = '';
}

function calculate() {
  let result = eval(calculation);
  document.getElementById('result').value = result;
  calculation = '';
}

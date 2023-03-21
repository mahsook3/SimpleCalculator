let result = document.getElementById('result');

function insert(num) {
  result.value += num;
}

function clearAll() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}

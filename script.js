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
  let result;
  
  // Fixing the decimal point bug
  if (calculation.slice(-1) === '.') {
    calculation = calculation.slice(0, -1);
  }
  
  try {
    result = eval(calculation);
    document.getElementById('result').value = result;
  } catch {
    document.getElementById('result').value = 'Error';
  }
  
  calculation = '';
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Escape') {
    clearAll();
  } else if (event.key === '/' || event.key === '*' || event.key === '-' || event.key === '+') {
    insert(event.key);
  } else if (event.key === '.') {
    // Fixing the decimal point bug
    if (!calculation.includes('.')) {
      insert(event.key);
    }
  } else if (event.key === 'Backspace') {
    calculation = calculation.slice(0, -1);
    document.getElementById('result').value = calculation;
  } else if (event.key >= '0' && event.key <= '9') {
    insert(event.key);
  }
});

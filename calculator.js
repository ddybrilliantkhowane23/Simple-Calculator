const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch (e) {
    display.value = 'Error';
  }
}


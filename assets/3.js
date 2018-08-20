document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

var currentState = document.getElementById('currentState');
var nextState = document.getElementById('nextState');

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
  currentState.innerHTML = 'red';
  nextState.innerHTML = 'green';
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
  currentState.innerHTML = 'yellow';
  nextState.innerHTML = 'red';
}

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
  currentState.innerHTML = 'green';
  nextState.innerHTML = 'yellow';
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

illuminateGreen();
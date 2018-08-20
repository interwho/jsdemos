var from = document.getElementById('from');
var to = document.getElementById('to');

from.onchange = recalculate;
to.onchange = recalculate;

var fromStation = document.getElementById('fromStation');
var toStation = document.getElementById('toStation');
var fare = document.getElementById('fare');

function recalculate() {
  fromStation.innerHTML = from.options[from.selectedIndex].text;
  toStation.innerHTML = to.options[to.selectedIndex].text;
  fare.innerHTML = (0.20 * Math.abs(from.value - to.value)).toFixed(2);
}
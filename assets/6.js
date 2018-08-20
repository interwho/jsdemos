var textinput = document.getElementById('textinput');
var textinputbox = document.getElementById('textinputbox');

textinput.onkeyup = textChanged;

function textChanged() {
  textinputbox.innerHTML = textinput.value;
}

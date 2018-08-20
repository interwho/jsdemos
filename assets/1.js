var buttons = document.getElementsByTagName('button');

var tempValue;
var currValArr = [];

function buttonAction(index) {

    //You need to return a new function that does your job otherwise it wont wait for onclick event and just finish
    return function () {
        var number1 = document.getElementById('number1');
        var number2 = document.getElementById('number2');
        var answer = document.getElementById('answer');

        var btnValue = buttons[index].value;

        if (index > 9) {
            number2.innerHTML = btnValue;
            answer.innerHTML = parseInt(number1.innerHTML) + parseInt(number2.innerHTML);
        } else {
            number1.innerHTML = btnValue;
            answer.innerHTML = parseInt(number1.innerHTML) + parseInt(number2.innerHTML);
        }
    };
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonAction(i), false);
}
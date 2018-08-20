var lights = 'on';

document.getElementById('lightSwitch').onclick = switchLights;
var background = document.getElementById('switchBacking');
var lightsVar = document.getElementById('lights');

function switchLights() {
    if (lights == 'on') {
        lights = 'off';
        background.style = 'padding:50px; background: black;';
    } else {
        lights = 'on'; 
        background.style = 'padding:50px; background: yellow;';
    }

    lightsVar.innerHTML = lights;
}

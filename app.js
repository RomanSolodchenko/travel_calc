type = "text/jаvascript"

function raschitat() {
    length = document.getElementById('length').value;
    speed = document.getElementById('speed').value;

    if (length == "") {
        alert("Вы не указали расстояние");
    } else if (speed == "") {
        alert("Вы не указали скорость");
    } else {

        const people = getPeople();
        const stop = getStop();
        mean = parseFloat(length) / parseFloat(speed);
        document.getElementById('time').innerHTML = "Среднее время: " + (mean + people + stop) + " час ";

    }
}

function getPeople() {
    const people = document.getElementById("people").value;
    switch (people) {
        case "four":
            return 0;
        case "five":
            return 0;
        case "six":
            return 0.2;
        case "seven":
        case "eight":
        case "nine":
            return 0.3;
        case "ten":
            return 0.4;
        default:
            return 0;
    }
}

function getStop() {
    const stop = document.getElementById("stop").value;
    switch (stop) {
        case "one":
            return 0.5;
        case "two":
            return 1;
        case "three":
            return 1.5;
        case "four":
            return 2;
        case "five":
            return 2.5;
        default:
            return 0;
    }
}


var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
var slider = document.querySelector('#slider');
var img = slider.querySelector('img');

var i = 1;

img.src = 'images/' + images[0];

window.setInterval(function() {

    img.src = 'images/' + images[i];

    i++;

    if (i == images.length) {
        i = 0;
    }
}, 1200);


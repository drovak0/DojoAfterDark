var abrv = 1500;
var time;
var stopped = false;
var timer;

function convert() {
    var temp = "" + abrv;
    if (temp[2] === '0' && temp[3] === '0') {
        time = temp[0] + temp[1];
    } else if (abrv < 1000) {
        time = temp[0];
    }
}

function down() {
    if (parseInt(abrv) > 100) {
        abrv = parseInt(abrv) - 100;
    }
    convert();
    $('#time').html(time);
    stopped = false;
}

function up() {
    if (parseInt(time) < 60) {
        abrv = parseInt(abrv) + 100;
    }
    convert();
    $('#time').html(time);
    stopped = false;
}

$(document).ready(function () {
    convert();
    $('#time').html(time);
});

function start() {
    if (stopped === false) {
        seconds = parseInt(time) * 60;
    }
    stopped = false;
    $('#start').html('Stop');
    document.getElementById('down').setAttribute('onclick', '');
    document.getElementById('up').setAttribute('onclick', '');
    document.getElementById('start').setAttribute('onclick', 'stop()');

    timer = setTimeout(countDown, 1000);

    function countDown() {
        if (seconds > 0) {
            seconds--;
        }
        if (seconds > 0 && stopped === false) {
            timer = setTimeout(countDown, 1000);
        }
        if (stopped === false && seconds % 60 >= 10) {
            $('#time').html(Math.floor(seconds / 60) + ':' + seconds % 60);
        } else if (seconds % 60 < 10 && seconds % 60 >= 0 && seconds / 60 !== 0) {
            $('#time').html(Math.floor(seconds / 60) + ':0' + seconds % 60);
        } else if (seconds / 60 === 0) {
            $('#time').html('DONE');
            alert("Timer is done!");
        }
    }
}

function stop() {
    clearTimeout(timer);
    stopped = true;
    $('#start').html('Start');
    document.getElementById('down').setAttribute('onclick', 'down()');
    document.getElementById('up').setAttribute('onclick', 'up()');
    document.getElementById('start').setAttribute('onclick', 'start()');
    if (seconds % 60 >= 10) {
        $('#time').html(Math.floor(seconds / 60) + ':' + seconds % 60);
    } else {
        $('#time').html(Math.floor(seconds / 60) + ':0' + seconds % 60);
    }
}

function reset() {
    if (stopped === false) {
        clearTimeout(timer);
        document.getElementById('down').setAttribute('onclick', 'down()');
        document.getElementById('up').setAttribute('onclick', 'up()');
        document.getElementById('start').setAttribute('onclick', 'start()');
        $('#start').html('Start');
        stopped = true;
    }

    seconds = 1500;
    abrv = 1500;
    time = '15';
    $('#time').html(time);
}
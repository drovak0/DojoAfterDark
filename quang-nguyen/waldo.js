
var time = 0;
var timeTable = [];

function getStats(timeArr) {
    var min = timeArr[0], max = timeArr[0], sum = timeArr[0];
    var count = 1;

    for (var index in timeArr) {
        if (timeArr[index] > max) {
            max = timeArr[index];
        }

        if (timeArr[index] < min) {
            min = timeArr[index]
        }

        sum += timeArr[index];
        count++;
    }

    return { worst: max, average: Math.floor(sum / count), best: min };
}

function displayTime(timeStamp) {
    var hours = Math.floor(timeStamp / 60 / 60);
    var minutes = Math.floor(timeStamp / 60) - (hours * 60);
    var seconds = timeStamp % 60;
    return `${hours > 0 ? `${hours}h ` : ``}${minutes > 0 ? `${minutes}m ` : ``}${seconds}s`;
}

function startTimer() {
    setInterval(() => {
        time++;
        $(`.timer`).text(displayTime(time));
    }, 1000);
}

function waldoClicked() {
    draw();
    timeTable.push(time);
    time = 0;

    var tableRow = `<tr>
        <th scope="row" class="font-weight-normal">${timeTable.length}</th>
        <th class="font-weight-light">${displayTime(timeTable[timeTable.length - 1])}</th>
    </tr>`;

    $('tbody').append(tableRow);

    var scoreRatings = getStats(timeTable);
    for (var key in scoreRatings) {
        var firstCapKey = key.charAt(0).toUpperCase() + key.slice(1);
        var value = `${firstCapKey}: ${displayTime(scoreRatings[key])}`
        $(`#${key}`).html(value);
    }
}

function draw() {
    var x = Math.floor(Math.random() * 20) + 0;
    var y = Math.floor(Math.random() * 20) + 0;
    var code = ``;

    for (var row = 0; row < 20; row++) {
        code += `<div class="row game-content m-0 p-0" style="height: 5vh">`;

        for (var col = 0; col < 20; col++) {
            var waldo = (col == x && row == y) ? "waldo" : "blank";
            code += `<div class="col bg-${waldo} waldo-hovering m-0 p-0"></div>`;
        }

        code += `</div>`;
    }

    $('.game').html(code);
    $(".bg-waldo").css("opacity", "0");
    $(".bg-blank").css("opacity", "0");
    $(".bg-waldo").on("click", waldoClicked);
    handleHovering();
}

function handleHovering() {
    $('.waldo-hovering').hover(function () {
        $(this).animate({
            opacity: "1",
            height: "+=10",
        }, 250)
    }, function () {
        $(this).animate({
            opacity: "0",
            height: "-=10",
        }, 250);
    });

    $('#waldo').hover(function () {
        $(this).animate({
            width: "+=10",
            height: "+=10",
        }, 150)
    }, function () {
        $(this).animate({
            width: "-=10",
            height: "-=10",
        }, 150);
    });
}

$(document).ready(function () {
    draw();
    startTimer();
});


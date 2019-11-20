// TODO: Add ability to change field side based on FMS

const imageWidth = 357.5; // pixels
const imageHeight = 722.5; // pixels // Divided by 1.2 * 2
const fieldWidth = 654; // 652 inches
const fieldHeight = 324; // 324 inches
const robotWidth = 28.0; // inches
const robotHeight = 33.0; // inches
const robotWidthPixels = robotWidth * (imageWidth / fieldWidth);
const robotHeightPixels = robotHeight * (imageWidth / fieldWidth);
const updatePeriod = 20; // ms
const autopilotStart = new Audio("media/AutopilotStart.mp3");
const autopilotEnd = new Audio("media/AutopilotEnd.mp3");

var ctx = document.getElementById("field").getContext("2d");
var speed = 0;
var newLog = true;
var interval;

var x = 0;
var y = 0;
var theta = 0;

main();

function main() {
    document.getElementById("play").onclick = periodic;
    document.getElementById("stop").onclick = () => clearInterval(interval);
}

function init() {
    initField();

}

function initField() {
    var image = new Image();

    ctx.canvas.width = imageWidth;
    ctx.canvas.height = imageHeight;
    ctx.clearRect(0, 0, imageWidth, imageHeight);
    ctx.fillStyle = "#FF0000";

    // image.onload = () => ctx.drawImage(image, 0, 0, imageWidth, imageHeight);

    image.src = "img/2019-field-3.png";
}

function periodic() {
    interval = setInterval(
        function () {
            /* newLog = !newLog;
            if (newLog) {
                displayToast("Error: Elevator Talon reset!");
            } */
            updateSpeedometer();
            updateField();
        },
        20
    );
}

function updateSpeedometer() {
    speed = speed + 1;
    document.getElementById("speedometer").innerHTML = speed;
}

function updateField() {
    x = x + 1;
    y = y + 1;
    theta = theta + 1;
    drawRobot(x, y, theta);
}

function drawRobot(xInches, yInches, angleDegrees) {
    var xPixels = xInches * (imageWidth / fieldWidth);
    var yPixels = yInches * (imageWidth / fieldWidth);
    ctx.beginPath();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.rect(xPixels, yPixels, robotWidthPixels, robotHeightPixels);
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.translate(xPixels, yPixels);
    // ctx.fillStyle = 'red';
    // ctx.fillRect(0, 0, 80, 80);
    // ctx.rotate(angle);
    ctx.stroke();

    // ctx.translate(xPixels, yPixels);
    // ctx.rotate(angle);
    // ctx.rect(roboWidthPixels / 2, robotHeightPixels / 2, robotWidthPixels, robotHeightPixels);
    // ctx.fillStyle = "rgba(255,255,0,0)";
    // ctx.fill();
    /* ctx.rotate(-angle);
    ctx.translate(-xPixels, -yPixels); */
}

/* function drawRobot(pose) {
    w = w * (width / fieldWidth);
    h = h * (height / fieldHeight);
    fillColor = fillColor || "rgba(0,0,0,0)";
    // ctx.save();
    if (noFill == null || !noFill)
        ctx.beginPath();
    ctx.translate(pos.drawX, pos.drawY);
    ctx.rotate(angle);
    ctx.rect(-w / 2, -h / 2, w, h);
    ctx.fillStyle = fillColor;
    if (noFill == null || !noFill)
        ctx.fill();
    if (strokeColor != null) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 4;
        ctx.stroke();
    }
    ctx.rotate(-angle);
    ctx.translate(-pos.drawX, -pos.drawY);
    // ctx.restore();
} */

function displayToast(message) {
    bulmaToast.toast(
        {
            message: message,
            duration: 2000,
            position: "top-right",
            animate: {
                in: "fadeIn",
                out: "fadeOut"
            }
        }
    );
}


// ----- OLD CODE -----
/* const money = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
const labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

renderChart(money, labels);
autopilotSound.play();

// Copied code
function float2dollar(value) {
    return "U$ " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Copied code
function renderChart(money, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: money,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return float2dollar(value);
                        }
                    }
                }]
            }
        },
    });
} */
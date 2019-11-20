const autopilotSound = new Audio("media/AutopilotStart.mp3");
const width = 429; // pixels
const height = 867; // pixels
const updatePeriod = 20; // ms

var newLog = true;

setInterval(
    periodic(),
    200
);

function init() {
    var ctx = document.getElementById("field").getContext("2d");
    var image = new Image();

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#FF0000";

    image.onload = function() {
        ctx.drawImage(image, 0, 0, width, height);
    }

    image.src = "img/2019-field-3.png";
}

function periodic() {
    // newLog = !newLog;
    // if (newLog) {
    //     bulmaToast.toast(
    //         {
    //             message: "Error: Elevator SRX reset!",
    //             duration: 200,
    //             position: "top-right",
    //             animate: { in: "fadeIn", out: "fadeOut" }
    //         }
    //     );
    // }
}


// ----- OLD CODE -----
// const money = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
// const labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// renderChart(money, labels);
// autopilotSound.play();

// // Copied code
// function float2dollar(value) {
//     return "U$ " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// }

// // Copied code
// function renderChart(money, labels) {
//     var ctx = document.getElementById("myChart").getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'This week',
//                 data: money,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true,
//                         callback: function (value, index, values) {
//                             return float2dollar(value);
//                         }
//                     }
//                 }]
//             }
//         },
//     });
// }
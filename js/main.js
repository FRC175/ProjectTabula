const money = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
const labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
bulmaToast.toast(
    {
        message: "Error: Elevator SRX reset!",
        duration: 2000,
        position: "top-right",
        animate: { in: "fadeIn", out: "fadeOut" }
    }
);
var autopilotSound = new Audio("media/AutopilotStart.mp3");

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
}
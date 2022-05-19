////var ctx = document.getElementById("myChart2").getContext("2d");
////console.log('hi', ctx)
////var myChart = new Chart(ctx, {
////    type: 'bar',
////    data: {
////        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
////        datasets: [{
////            label: '# of Votes',
////            data: [12, 19, 3, 5, 2, 3],
////            backgroundColor: [
////                'rgba(255, 99, 132, 0.2)',
////                'rgba(54, 162, 235, 0.2)',
////                'rgba(255, 206, 86, 0.2)',
////                'rgba(75, 192, 192, 0.2)',
////                'rgba(153, 102, 255, 0.2)',
////                'rgba(255, 159, 64, 0.2)'
////            ],
////            borderColor: [
////                'rgba(255,99,132,1)',
////                'rgba(54, 162, 235, 1)',
////                'rgba(255, 206, 86, 1)',
////                'rgba(75, 192, 192, 1)',
////                'rgba(153, 102, 255, 1)',
////                'rgba(255, 159, 64, 1)'
////            ],
////            borderWidth: 1
////        }]
////    },
////    options: {
////        scales: {
////            yAxes: [{
////                ticks: {
////                    beginAtZero: true
////                }
////            }]
////        }
////    }
////});

//- BAR CHART -
//-------------
var barChartCanvas = $('#barChart').get(0).getContext('2d')
var barChartData = $.extend(true, {}, areaChartData)
var temp0 = areaChartData.datasets[0]
var temp1 = areaChartData.datasets[1]
barChartData.datasets[0] = temp1
barChartData.datasets[1] = temp0

var barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false
}

new Chart(barChartCanvas, {
    type: 'bar',
    data: barChartData,
    options: barChartOptions
})
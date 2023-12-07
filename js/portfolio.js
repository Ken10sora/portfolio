var ctx = document.getElementById('htmlChart');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["HTML"],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ["rgb(186, 59, 36)"]
          }
        ]
      }
});

var ctx = document.getElementById('cssChart');
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["CSS"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["rgb(186, 59, 36)"]
      }
    ]
  }
});

var ctx = document.getElementById('javascriptChart');
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["JavaScript"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["rgb(23, 103, 23)"]
      }
    ]
  }  
});

var ctx = document.getElementById('javaChart');
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Java"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#80796c"]
      }
    ]
  }
});

var ctx = document.getElementById('postgresqlChart');
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["PostgresQL"],
    datasets: [
      {
        data: ["30, 70"],
        backgroundColor: ["#80796c"]
      }
    ]
  }
});
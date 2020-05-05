const api_url = 'https://coronavirus-19-api.herokuapp.com/countries/India';
const api_url2 = 'https://coronavirus-19-api.herokuapp.com/all';
function getData() {
    fetch(api_url).then(function(response) {
        return response.json();
    }).then(function(data) {
        
        document.getElementById('totcases').textContent = data.cases;
        mylist.push(data.cases);
        document.getElementById('totrecov').textContent = data.recovered;
        mylist.push(data.recovered);
        document.getElementById('totdeaths').textContent = data.deaths;
        mylist.push(data.deaths);
        //document.getElementById('updatetime').textContent = 'last updated: ' + data.cases_time_series[pos - 1].date + ' 11:59 pm';
    })
    .catch(function(error) {
        console.log('OH! something went wrong');
        document.getElementById('err').textContent = "Oops! Check system time and try again!";
        document.getElementById('err2').textContent = "Or the data is being updated. Try again after some time :)";
    })
  //document.getElementById('totcases').textContent = cases_time_series[93].totalconfirmed;
    //document.getElementById('totrecov').textContent = data.cases_time_series.totalrecovered;
    //document.getElementById('totdeaths').textContent = obj.cases_time_series.totaldeceased;
}

function getDatag() {
    fetch(api_url2).then(function(response) {
        return response.json();
    }).then(function(datag) {
        
        document.getElementById('totcasesg').textContent = datag.cases;
        mylistg.push(datag.cases);
        document.getElementById('totrecovg').textContent = datag.recovered;
        mylistg.push(datag.recovered);
        document.getElementById('totdeathsg').textContent = datag.deaths;
        mylistg.push(datag.deaths);
        //document.getElementById('updatetime').textContent = 'last updated: ' + data.cases_time_series[pos - 1].date + ' 11:59 pm';
    })
    .catch(function(error) {
        console.log('OH! something went wrong');
        document.getElementById('err').textContent = "Oops! Check system time and try again!";
        document.getElementById('err2').textContent = "Or the data is being updated. Try again after some time :)";
    })
  //document.getElementById('totcases').textContent = cases_time_series[93].totalconfirmed;
    //document.getElementById('totrecov').textContent = data.cases_time_series.totalrecovered;
    //document.getElementById('totdeaths').textContent = obj.cases_time_series.totaldeceased;
}

async function getCSV() {
    const response = await fetch('world.csv');
    const datacsv = await response.text();

    const table = datacsv.split('\n').slice(1);
    table.forEach(row => {
        const col = row.split(',');
        const date = col[0];
        const cases = col[1];
        xlabels.push(date);
        ylabels.push(cases);
        //console.log(date, cases);
    })
}

async function getCSV2() {
    const response = await fetch('india_small.csv');
    const datacsv2 = await response.text();

    const table2 = datacsv2.split('\n').slice(1);
    table2.forEach(row2 => {
        const col2 = row2.split(',');
        const date2 = col2[0];
        const cases2 = col2[2];
        xlabels2.push(date2);
        ylabels2.push(cases2);
        //console.log(date2, cases2);
    })
}



getData();
getDatag()

const xlabels = [];
const ylabels = [];
const xlabels2 = [];
const ylabels2 = [];
const mylist = [];
const mylistg = [];

createChart();
createChart2();
DoughnutChart();
DoughnutChartg();

async function createChart() {
    await getCSV();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Total Cases- Global',
                data: ylabels,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

async function createChart2() {
    await getCSV2();
    const ctx = document.getElementById('chart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels2,
            datasets: [{
                label: 'Total Cases- India',
                data: ylabels2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

async function DoughnutChart() {
    var ctx = document.getElementById('chartD1').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Total confirmed', 'Recovered', 'Deaths'],
        datasets: [{
            label: 'Till 4 May',
            data: mylist,
            backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ],
            borderColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

async function DoughnutChartg() {
    var ctx = document.getElementById('chartD2').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Total confirmed', 'Recovered', 'Deaths'],
        datasets: [{
            label: 'Till 4 May',
            data: mylistg,
            backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ],
            borderColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}


//https://coronavirus-19-api.herokuapp.com/countries/India
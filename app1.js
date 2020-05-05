const api_url = 'https://coronavirus-19-api.herokuapp.com/countries/India';
const api_url2 = 'https://coronavirus-19-api.herokuapp.com/all';
function getData() {
    fetch(api_url).then(function(response) {
        return response.json();
    }).then(function(data) {
        
        document.getElementById('totcases').textContent = data.cases;
        document.getElementById('totrecov').textContent = data.recovered;
        document.getElementById('totdeaths').textContent = data.deaths;
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
        document.getElementById('totrecovg').textContent = datag.recovered;
        document.getElementById('totdeathsg').textContent = datag.deaths;
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
        console.log(date, cases);
    })
}

getData();
getDatag()

const xlabels = [];
const ylabels = [];

createChart();

async function createChart() {
    await getCSV();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Coronavirus Cases- Global',
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
            responsive: true,
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
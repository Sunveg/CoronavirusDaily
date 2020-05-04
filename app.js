const api_url = 'https://api.covid19india.org/data.json';
let x = 92;
let flag = 0;
function getData() {
    fetch(api_url).then(function(response) {
        return response.json();
    }).then(function(data) {
        var pos = data.cases_time_series.length;
        console.log(data.cases_time_series.length);
        document.getElementById('totcases').textContent = data.cases_time_series[pos - 1].totalconfirmed;
        document.getElementById('totrecov').textContent = data.cases_time_series[pos - 1].totalrecovered;
        document.getElementById('totdeaths').textContent = data.cases_time_series[pos - 1].totaldeceased;
        document.getElementById('updatetime').textContent = 'last updated: ' + data.cases_time_series[pos - 1].date + ' 11:59 pm';
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

getData();


//https://coronavirus-19-api.herokuapp.com/countries/India
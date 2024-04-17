const searchForm = document.querySelector('#search-form');
const searchInputEl = document.querySelector('.search-input');
const forecastSection = document.querySelector('#forecast');

function convertApi(){
const apiLatLong = 'https://api.openweathermap.org/geo/1.0/direct?q=${searchInputEl}&appid=6ddd07e5292beed8d7a5cf72cc12ee01'
};

// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function getApi() {
    const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?${convertApi}&appid=6ddd07e5292beed8d7a5cf72cc12ee01';

    fetch(requestURL)
    .then(function (response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
        const weatherCity = document.createElement('div');

        weatherCity.textContent = data

        forecastSection.appendChild(weatherCity);
        
    });
}

function handelSubmitForm(event) {
    event.preventDefault();

    const searchValue = document.querySelector('.search-input').value;

    if (!searchValue) {
        console.error('You need to input a City');
        return;
    }
//     const queryString = `./search-results.html?q=${searchValue}`;

//   location.assign(queryString);

}
searchForm.addEventListener('search', handelSubmitForm);
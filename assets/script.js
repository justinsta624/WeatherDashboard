// Link for open weather map API: https://home.openweathermap.org/api_keys
// How to use DOM document query selector "external source: https://www.w3schools.com/jsref/met_document_queryselector.asp"
var CityTextEl = document.querySelector("#city-text");
var SearchHistoryBtnEl = document.querySelector("#search-history-button");
var SearchForm = document.querySelector("#search-form");
var SubmitBtn = document.querySelector("#submit-button");
var ResetBtn = document.querySelector("#reset-button");

var CurrentWeatherCondition = document.querySelector("#current-weather-condition");
var FutureWeatherCondition = document.querySelector("#future-weather-condition");
// Assigning an empty array
var PastSearch = [];  

function OpenWeather(CityName) {
    // One call weather data: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // search by city name: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    var APIKey = "3f1c7050fcbbe8196d43f120c87753f7";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&units=metric&appid=" + APIKey;
    // fetching weather data from the OpenWeatherMap API (search by city name)
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (OpenCurrentWeather) {
            console.log(OpenCurrentWeather);
            var oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${OpenCurrentWeather.coord.lat}&lon=${OpenCurrentWeather.coord.lon}&appid=9dd332c2cdf5ad3eee158912aa75b747&units=metric`;
            // console.log(`lat: ${latitude}, Lon: ${longitude}`);
            // fetching weather data from the OpenWeatherMap API (current/forecast)
            fetch(oneCall)
                .then(function (response) {
                    return response.json();
                })
                // use JSON.stringify to Storing data in local storage
                // external source: https://www.w3schools.com/js/js_json_stringify.asp
                .then(function (OpenFutureWeather) {
                    if (PastSearch.includes(OpenCurrentWeather.name) === false) {
                        PastSearch.push(OpenCurrentWeather.name);
                        localStorage.setItem("city", JSON.stringify(PastSearch));
                    }
                OpenCity();
                console.log(OpenFutureWeather);
                
                });
            });
    }


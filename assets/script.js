// Link for OpenWeatherMap API current weather: https://openweathermap.org/current
// Link for OpenWeatherMap API weather forecast for 5 days: https://openweathermap.org/forecast5

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

SubmitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var CityName = CityTextEl.value;
    console.log(CityName);
    OpenWeather(CityName);
});

function OpenWeather(CityName) {
    // One call weather data: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}
    // search by city name: https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={APIkey}
    var APIKey = "3f1c7050fcbbe8196d43f120c87753f7";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&units=metric&appid=" + APIKey;
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
                    if (PastSearch.includes(OpenCurrentWeather.name) === false||PastSearch.includes("Reset") === false) {
                        PastSearch.push(OpenCurrentWeather.name);
                        console.log(PastSearch);
                        localStorage.setItem("city", JSON.stringify(PastSearch));
                    }
                    OpenCity();
                    console.log(OpenFutureWeather);

                    // use Moment JS to change date format in jQuery "external source: https://www.geeksforgeeks.org/how-to-use-moment-js-to-change-date-format-in-jquery/" 
                    // Template Literal: "external source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
                    // innerHTML: replaces the content inside HTML element "#CurrentWeatherCondition" with followings:

                    CurrentWeatherCondition.innerHTML = 

                    `<ul><li class="title"> ${OpenCurrentWeather.name}
                    (${moment(OpenCurrentWeather.dt,"X").format("MMM/DD/YYYY")})</li>
                    <li><img src ="https://openweathermap.org/img/wn/${OpenCurrentWeather.weather[0].icon}@2x.png" /></li> 
                    <li>Temperature: ${OpenCurrentWeather.main.temp}°C </li>
                    <li>Humidity: ${OpenCurrentWeather.main.humidity}% </li>
                    <li>Wind-Speed: ${OpenCurrentWeather.wind.speed}M/S </li>
                    </ul>`;
                    // From the OpenWeatherMap API;
                    // OpenCurrentWeather.name: name of the city
                    // ${moment(OpenCurrentWeather.dt,"X").format("MM/DD/YYYY")}: Uses the moment.js library to format the timestamp into a readable date format. 
                    // external source: https://momentjscom.readthedocs.io/en/latest/moment/01-parsing/03-string-format/
                    // Weather image ICON URL "external source: https://openweathermap.org/weather-conditions"
                    // Display temperature, humidity, wind speed               

                    var WeatherCards = "";
                    for (var i = 1; i <= 5; i++) {
                    WeatherCards = WeatherCards + `<ul class="col-12 col-xl-2 day">
                    <li>(${moment(OpenFutureWeather.daily[i].dt,"X").format("MMM/DD/YYYY")})</li>
                    <li><img src ="https://openweathermap.org/img/wn/${OpenFutureWeather.daily[i].weather[0].icon}@2x.png" /></li>
                    <li>Temperature: ${OpenFutureWeather.daily[i].temp.day}°C </li>
                    <li>Wind-Speed: ${OpenFutureWeather.daily[i].wind_speed}M/S </li>
                    <li>Humidity: ${OpenFutureWeather.daily[i].humidity}% </li>
                    </ul>`;
                    // From the OpenWeatherMap API;
                    // ${moment(OpenFutureWeather.daily[i].dt,"X").format(" MM/DD/YYYY")}: Uses the moment.js library to format the timestamp for the specific day into a readable date format.
                    // Weather image ICON URL "external source: https://openweathermap.org/weather-conditions"
                    // Display temperature, wind speed, humidity for the specific day
                }
                    // innerHTML: replaces the HTML element "#FutureWeatherCondition" with weather cards
                    FutureWeatherCondition.innerHTML = WeatherCards;
                });
        });
}

function OpenCity() {
    // retrieving/parsing JSON data stored under "city" in the localStorage and assigning it to the variable PastSearch.
    if (localStorage.getItem("city")) {
        PastSearch = JSON.parse(localStorage.getItem("city"));
    }
    // load saved data from the localStorage underneath the reset button
    var SearchList = "";
    for (var i = 0; i < PastSearch.length; i++) {
        if (PastSearch[i] !== "Reset") {
        SearchList = SearchList + `<button class="btn btn-secondary my-2 SearchBtn" type="submit">${PastSearch[i]}</button>`;
        }
        console.log(SearchList)
    }
    // innerHTML: replaces the content inside HTML element "#search-history-button" with variable function SearchList
    SearchHistoryBtnEl.innerHTML = SearchList;
    var ShowHistory = document.querySelectorAll(".SearchBtn");
    for (var i = 0; i < ShowHistory.length; i++) {
        ShowHistory[i].addEventListener("click", function () {
            OpenWeather(this.textContent);
        });
    }
}
OpenCity();

// Clear all items in localStorage & reset the PastSearch array
// innerHTML: Clears the content inside the HTML element "#search-history-button"
function resetPastSearch() {
    localStorage.clear();
    SearchHistoryBtnEl.innerHTML = "";
    PastSearch = [];
}

// Resets the past search history and clears local storage, when click the reset button
ResetBtn.addEventListener("click", function () {
    resetPastSearch();
});



// APIKey: 3f1c7050fcbbe8196d43f120c87753f7
// Link: https://home.openweathermap.org/api_keys
// base URL: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={3f1c7050fcbbe8196d43f120c87753f7}
// example of api call: https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f1c7050fcbbe8196d43f120c87753f7

const CitytextEl = document.querySelector("#city-text");
const SearchHistoryBtnEl = document.querySelector("#search-history-button");

var searchForm = document.querySelector("#search-form");
var SearchBtn = document.querySelector("#search-button");
var ResetBtn = document.querySelector("#reset-button");

var CurrentWeatherCondition = document.querySelector("#current-weather-condition");
var FutureWeatherCondition = document.querySelector("#future-weather-condition");
// Assigning an empty array
var SearchHistory = [];  


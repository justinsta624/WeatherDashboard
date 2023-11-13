# 06 Server-Side APIs: Weather Dashboard

## My Task

```
1. To build a weather dashboard that will run in the browser and feature dynamically updated HTML & CSS.
2. Use the "openweathermap API" to retrieve weather data for cities.
3. Use `localStorage` to store any persistent data (searched list of cities). 
```

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Source Information
```
1. Bootstrap
   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"; 
   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
   Bootstrap Grid system "https://getbootstrap.com/docs/5.0/layout/grid";
   Bootstrap forms "https://www.w3schools.com/bootstrap5/bootstrap_forms.php";
   Bootstrap buttons "https://www.w3schools.com/bootstrap5/bootstrap_buttons.php";
```
```   
2. JQuery
   "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
   "https://code.jquery.com/ui/1.13.2/jquery-ui.js"l
   Add JQuery CDN "https://www.w3schools.com/jquery/jquery_get_started.asp";
   Add JQuery user interface "https://blog.jqueryui.com/2022/07/jquery-ui-1-13-2-released";
```
```   
3. Cloudflare
   "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js";
   Displaying date/time in JavaScript "https://cdnjs.com/libraries/moment.js";
   "https://momentjscom.readthedocs.io/en/latest/moment/01-parsing/03-string-format";
   Use Moment JS to change date format in jQuery "https://www.geeksforgeeks.org/how-to-use-moment-js-to-change-date-format-in-jquery";
```
```   
4. Google Fonts
   "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap";
```
```
5. OpenWeatherMap APIs
   Link for API Keys: "https://home.openweathermap.org/api_keys";
   One call weather data: "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
   search by city name: "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
   Weather image ICON URL "https://openweathermap.org/weather-conditions";
```
```   
6. External sources for codes
   How to use DOM document query selector "https://www.w3schools.com/jsref/met_document_queryselector.asp";
   use JSON.stringify to Storing data in local storage "https://www.w3schools.com/js/js_json_stringify.asp";
   Template Literal: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals";
```

## Screenshot of the deployed application


## URL of the functional, deployed application
https://justinsta624.github.io/WeatherDashboard/

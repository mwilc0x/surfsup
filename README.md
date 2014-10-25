surfsup
=======

Node module for Marine/Sailing/Surfing Weather API

![the beach](/lbi.jpeg)

### Installation:

```sh
npm install surfsup
```

### Usage:

First, you'll have to grab an API key for yourself. No need to worry, they're free. :)

https://developer.worldweatheronline.com/auth/register

*surfsup now supports magicseaweed!* They are awesome and have an amazing website for surf report data! Check them out.

http://magicseaweed.com/developer/forecast-api

Set your key(s) as environment variable(s) on your machine...

OSX:

```sh
export WEATHER_KEY=<your key here>
```
Windows:

```sh
SET WEATHER_KEY=<your key here>
```

Additionally, if you have an MSW key (magicseaweed) and would like to query for surf reports you can set it as well:

```sh
export MSW_KEY=<your key here>
```
Windows:

```sh
SET MSW_KEY=<your key here>
```

**Get Surf Report**

(this requires an MSW key)

```sh
var SurfsUp = require('surfsup');

var su = new SurfsUp();

su.getSurfReport({ input: '10', fields: ['timestamp, wind.*,condition.temperature']}).then(function(response) {
  console.log(response);
});
```

**Get Local Weather**

```sh
var SurfsUp = require('surfsup');

var su = new SurfsUp();

su.getLocalWeather({ q: 'Teahupoo, Tahiti', format: 'json' }).then(function(response) {
  console.log(response);
});

```

Available Input Parameters:

| Parameter | Type | Description |
| --------- | ---- | ----------- |
|     q     | string | Pass Latitude/Longitude (decimal degree) of sea or ocean point |
|  format   | string | Output format as JSON or XML |
|    fx     | string | (Optional) Allows you to enable or disable normal weather output. The possible values are yes or no. By default it is yes. E.g:- fx=yes or fx=no |
| includeLocation | string | (Optional) Returns the nearest marine weather point for which the weather data is returned for a given lat/lon value. The possible values are yes or no. By default it is no. E.g:- includeLocation=yes or includeLocation=no |
|  callback | string | (Optional) Only to be used for json callback feature. E.g:- callback=function_name |
|   lang    | string | (Optional) Returns weather description text in the language of your choice. E.g:- lang=ar (Arabic). Visit Multilingual support page for more information: http://www.worldweatheronline.com/weather-api-multilingual.aspx |


**Get Marine Weather**

```sh
var SurfsUp = require('surfsup');

var su = new SurfsUp();

su.getMarineWeather({ q: '45,-2', format: 'json' }).then(function(response) {
  console.log(response);
});

```

Available Input Parameters:

| Parameter | Type | Description |
| --------- | ---- | ----------- |
|     q     | string | Pass Latitude/Longitude (decimal degree) of sea or ocean point |
|   format  | string | Output format as JSON or XML |
|    fx     | string | (Optional) Allows you to enable or disable normal weather output. The possible values are yes or no. By default it is yes. E.g:- fx=yes or fx=no |
| includeLocation | string | (Optional) Returns the nearest marine weather point for which the weather data is returned for a given lat/lon value. The possible values are yes or no. By default it is no. E.g:- includeLocation=yes or includeLocation=no |
| callback | string | (Optional) Only to be used for json callback feature. E.g:- callback=function_name |
| lang | string | (Optional) Returns weather description text in the language of your choice. E.g:- lang=ar (Arabic). Visit Multilingual support page for more information: http://www.worldweatheronline.com/weather-api-multilingual.aspx |


**Get Ski and Mountain Weather**

```sh
var SurfsUp = require('surfsup');

var su = new SurfsUp();

su.getSkiMountainWeather({ q: 'Salt Lake City', format: 'json' }).then(function(response) {
  console.log(response);
});

```

Available Input Parameters:

| Parameter | Type | Description |
| --------- | ---- | ----------- |
|     q     | string | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name |
|  format   | string | Output format as JSON or XML |
|    extra     | string | (Optional) It allows to request some additional information in the feed return. Possible values are isDayTime, utcDateTime. Two or more values can be passed as comma separated. |
| includeLocation | string | (Optional) Returns the nearest ski and mountain weather point for which the weather data is returned for a given postcode, zipcode, city name and lat/lon values. The possible values are yes or no. By default it is no. E.g:- includeLocation=yes or includeLocation=no |
|  callback | string | (Optional) Only to be used for json callback feature. E.g:- callback=function_name |
|   lang    | string | (Optional) Returns weather description text in the language of your choice. E.g:- lang=ar (Arabic). Visit Multilingual support page for more information: http://www.worldweatheronline.com/weather-api-multilingual.aspx |


**Get Time Zone Data**

```sh
var SurfsUp = require('surfsup');

var su = new SurfsUp();

su.getTimeZoneData({ q: 'Lima, Peru', format: 'json' }).then(function(response) {
  console.log(response);
});

```

Available Input Parameters:

| Parameter | Type | Description |
| --------- | ---- | ----------- |
|     q     | string | Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name |
|  format   | string | Output format as JSON or XML |
|  callback | string | (Optional) Only to be used for json callback feature. E.g:- callback=function_name |

## Compile TypeScript

```sh
gulp compile
```

## Tests

```sh
gulp tests
```

## Pull Requests

Please don't hesitate to submit a PR for something you'd like added. I'd <3 to have other contributions to this project!
You can always reach me on [twitter](https://twitter.com/subr0utine) too.

## Issues
[Issues](https://github.com/mjw56/surfsup/issues)

## License
[MIT License](https://raw.githubusercontent.com/mjw56/surfsup/master/LICENSE)

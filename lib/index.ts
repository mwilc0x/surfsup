'use strict';

var _key = (process.env.WEATHER_KEY || ""),
    _baseURL = 'http://api.worldweatheronline.com/free/v1/',
    rp = require('request-promise');

module.exports = {

  /**
  * Get Local Weather
  */
  getLocalWeather: (input) => {
    input.page = 'weather.ashx?';
    return rp(constructUrl(input));
  },

  /**
  * Get Ski & Mountain Weather
  */
  getSkiMountainWeather: () => {

  },

  /**
  * Get Marine Weather
  */
  getMarineWeather: (input) => {
    input.page = 'marine.ashx?';
    return rp(constructUrl(input));
  },

  /**
  * Get Time Zone Data
  */
  getTimeZoneData: () => {

  }

}

/**
* Helper to construct URL with request params
*/
function constructUrl(inputs: any): any {

  var base = _baseURL,
      count = 0;

  base += inputs.page;

  for(var key in inputs) {

    if(count === 0) {
      base += [key.toString(), '=', inputs[key]].join('');
    } else {
      base += ['&', key.toString(), '=', inputs[key]].join('');
    }
    count++;
  }

  base += ['&key=', _key].join('');

  return base;
}

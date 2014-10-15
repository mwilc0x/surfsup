/// <reference path='../typings/node-0.11.d.ts' />

var rp = require('request-promise');

class SurfsUp {
  public _key: string;
  public _baseURL: string;

  constructor() {
    this._key = (process.env.WEATHER_KEY || "");
    this._baseURL = 'http://api.worldweatheronline.com/free/v1/';
  }

  /**
  * Get Local Weather
  */
  getLocalWeather(input: any) {
    input.page = 'weather.ashx?';
    return rp(this._constructUrl(input));
  }

  /**
  * Get Ski & Mountain Weather
  */
  getSkiMountainWeather() {

  }

  /**
  * Get Marine Weather
  */
  getMarineWeather(input: any) {
    input.page = 'marine.ashx?';
    return rp(this._constructUrl(input));
  }

  /**
  * Get Time Zone Data
  */
  getTimeZoneData() {

  }

  /**
  * Helper to construct URL with request params
  */
  private _constructUrl(inputs: any): string {

    var url = this._baseURL,
        count = 0;

    url += inputs.page;

    for(var key in inputs) {

      if(count === 0) {
        url += [key.toString(), '=', inputs[key]].join('');
      } else {
        url += ['&', key.toString(), '=', inputs[key]].join('');
      }
      count++;
    }

    url += ['&key=', this._key].join('');

    return url;
  }

}

export = SurfsUp;

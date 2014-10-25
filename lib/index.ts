/// <reference path='../typings/node-0.11.d.ts' />

var rp = require('request-promise');
import Query = require('query');

class SurfsUp {
  public _key: string;
  public _mswkey: string;
  public _baseURL: string;
  public _baseMSWURL: string;


  constructor() {
    this._key = (process.env.WEATHER_KEY || "");
    this._mswkey = (process.env.MSW_KEY || "");
    this._baseURL = 'http://api.worldweatheronline.com/free/v2/';
    this._baseMSWURL = 'http://magicseaweed.com/api/';
  }

  /**
  * Get the surf report
  */
  getSurfReport(input: any) {
    input = input || {};
    return rp(this._constructMswUrl(input));
  }


  /**
  * Get Local Weather
  */
  getLocalWeather(input: Query) {
    input = input || <Query>{};
    input.page = 'weather.ashx?';
    return rp(this._constructUrl(input));
  }

  /**
  * Get Ski & Mountain Weather
  */
  getSkiMountainWeather(input: Query) {
    input = input || <Query>{};
    input.page = 'ski.ashx?';
    return rp(this._constructUrl(input));
  }

  /**
  * Get Marine Weather
  */
  getMarineWeather(input: Query) {
    input = input || <Query>{};
    input.page = 'marine.ashx?';
    return rp(this._constructUrl(input));
  }

  /**
  * Get Time Zone Data
  */
  getTimeZoneData(input: Query) {
    input = input || <Query>{};
    input.page = 'tz.ashx?';
    return rp(this._constructUrl(input));
  }


  private _constructMswUrl(input) {

    var url = this._baseMSWURL;

    if(!input.fields)
      return url += [this._mswkey, '/forecast?spot_id=', (input.spot || "")].join('');

    var fields = '';

    for(var i = 0; i < input.fields.length; i++) {
      fields += [input.fields[i], ','].join('');
    }

    return url += [this._mswkey, '/forecast?spot_id=', (input.spot || ""), '&fields=', fields].join('');
  }


  /**
  * Helper to construct URL with request params
  */
  private _constructUrl(inputs: Query): string {

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

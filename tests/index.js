(function(){
  'use strict';

  var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    spies = require('chai-spies'),
    surfsup = require('../bin/index');

  describe('surfsup', function(){

    it('should allow you to query for local weather', function(done){

      surfsup.getLocalWeather({ q: 'Teahupoo, Tahiti', format: 'json' }).then(function(response) {
        expect(response).to.not.be.undefined;
        done();
      }).catch(function(err) {
        done(err);
      });

    });

    it('should allow you to query for ski and mountain weather', function(){

    });

    it('should allow you to query for marine weather', function(done) {

      surfsup.getMarineWeather({ q: '-17.840208, -149.270001', format: 'json' }).then(function(response) {
        expect(response).to.not.be.undefined;
        done();
      }).catch(function(err) {
        done(err);
      });

    });

    it('should allow you to search for time zone data', function() {

    });

  });

})();

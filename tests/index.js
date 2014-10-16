(function(){
  'use strict';

  var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    spies = require('chai-spies'),
    SurfsUp = require('../bin/index'),
    su = new SurfsUp();

  describe('surfsup', function(){

    it('should allow you to query for local weather', function(done){

      su.getLocalWeather({ q: 'Teahupoo, Tahiti', format: 'json' }).then(function(response) {
        expect(response).to.not.be.undefined;
        expect(response.data).to.be.defined;
        done();
      }).catch(function(err) {
        done(err);
      });

    });

    it('should allow you to query for ski and mountain weather', function(){

    });

    it('should allow you to query for marine weather', function(done) {

      su.getMarineWeather({ q: '-17.840208, -149.270001', format: 'json' }).then(function(response) {
        expect(response).to.not.be.undefined;
        expect(response.data).to.be.defined;
        done();
      }).catch(function(err) {
        done(err);
      });

    });

    it('should allow you to search for time zone data', function() {

    });

  });

})();

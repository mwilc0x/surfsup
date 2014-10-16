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

    it('should not break if undefined passed to local weather method', function(done){

      su.getLocalWeather().then(function(response) {
        expect(response).to.equal('<?xml version="1.0" encoding="UTF-8"?><data><error><msg>Unable to find any matching weather location to the query submitted!</msg></error></data>');
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

    it('should not break if undefined passed to local weather method', function(done){

      su.getMarineWeather().then(function(response) {
        expect(response).to.equal('<?xml version="1.0" encoding="UTF-8"?><data><request><type>Unknown</type><query /></request><nearest_area /></data>');
        done();
      }).catch(function(err) {
        done(err);
      });

    });

    it('should allow you to search for time zone data', function() {

    });

  });

})();

'use strict';

var axios = require('axios');
var parseString = require('xml2js').parseString;

var baseUrl =
  'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true';

module.exports = function(airport) {
  return axios
    .get(baseUrl + '&stationString=' + airport)
    .then(function(resp) {
      if (resp.status !== 200) {
        throw new Error('got http status ' + resp.status);
      }
      if (resp.data.includes('<data num_results="0" />')) {
        throw new Error('airport not found');
      }
      return resp.data;
    })
    .then(function(xmlString) {
      return new Promise(function(resolve, reject) {
        parseString(xmlString, {explicitArray: false}, function(err, result) {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    })
    .then(function(obj) {
      obj = obj.response.data.METAR;
      obj.observation_time = new Date(obj.observation_time);
      if (obj.sky_condition.length > 0) {
        obj.sky_condition = obj.sky_condition.map(function(el) {
          return el.$;
        });
      }
      return obj;
    });
};

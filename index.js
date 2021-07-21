'use strict';

var get = require('./lib/get');
var parse = require('./lib/parse');

module.exports = async function (airport) {
  var xml = await get(airport);
  var obj = await parse(xml);
  obj = obj.response.data.METAR;
  obj.observation_time = new Date(obj.observation_time);
  if (obj.sky_condition.length > 0) {
    obj.sky_condition = obj.sky_condition.map(function (el) {
      return el.$;
    });
  }
  return obj;
};

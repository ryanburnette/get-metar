'use strict';

var getMetar = require('./index.js');
/* var inspect = require('eyes').inspector({ maxLength: false }); */

(async function () {
  var icao = (process.argv[2] || 'KATL').toLowerCase();
  var metar = await getMetar(icao);
  console.log(JSON.stringify(metar));
})();

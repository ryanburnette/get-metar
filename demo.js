'use strict';

var getMetar = require('./');
var inspect = require('eyes').inspector({maxLength: false});

getMetar('KSRQ').then(function(metar) {
  inspect(metar);
});

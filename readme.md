# @ryanburnette/get-metar

Get a METAR as an object from AviationWeather.gov.

## Usage

```js
var getMetar = require('@ryanburnette/get-metar');

getMetar('KATL').then(function(metar) {
  console.log(metar);
});
```

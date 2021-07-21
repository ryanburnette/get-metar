# [get-metar](https://github.com/ryanburnette/get-metar)

Get a METAR as an object from AviationWeather.gov.

## Installation

```bash
npm install @ryanburnette/get-metar
```

## Usage

```js
var getMetar = require('./index.js');

(async function () {
  var icao = (process.argv[2] || 'KATL').toLowerCase();
  var metar = await getMetar(icao);
  console.log(JSON.stringify(metar));
})();
```

Try the demo and pipe it to jq for easier reading.

```bash
node demo.js KSRQ | jq
```

# [get-metar](https://github.com/ryanburnette/get-metar)

Get a METAR as an object from AviationWeather.gov.

## Installation

```bash
npm install @ryanburnette/get-metar
```

## Usage

```js
var getMetar = require('@ryanburnette/get-metar');
(async function () {
  var metar = await getMetar('KATL');
  console.log(metar);
})();
```

## Demo

```bash
npm ci
node demo.js katl
```

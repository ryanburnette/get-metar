'use strict';

const axios = require('axios');

var baseUrl =
  'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true';

async function get(airport) {
  if (!airport) {
    throw new Error('airport must be provided');
  }

  var url = baseUrl + '&stationString=' + airport;

  return await axios.get(url).then(function (resp) {
    if (resp.data.includes('<data num_results="0" />')) {
      throw new Error('airport not found');
    }
    return resp.data;
  });
}

module.exports = get;

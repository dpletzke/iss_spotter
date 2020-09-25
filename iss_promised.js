const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

/*
 * Makes a request to ipvigilante.com using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function(ipApiResult) {
  const url = 'https://ipvigilante.com/' + JSON.parse(ipApiResult).ip;
  return request(url);
};

const fetchISSFlyOverTimes = (locationApiResult) => {
  const { latitude, longitude } = JSON.parse(locationApiResult).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(results => {
      return JSON.parse(results).response;
    });
};


module.exports = { nextISSTimesForMyLocation };
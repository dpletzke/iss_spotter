const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) callback(err, null);
    
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (!err) callback(null, JSON.parse(body));
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request('https://ipvigilante.com/' + ip, (err, response, body) => {
    if (err) callback(err, null);
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { data } = JSON.parse(body);
    if (!err) callback(null, data);

    
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
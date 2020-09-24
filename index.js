const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


/* fly over times test */
// const fetchFlyOverTimesCB = (err, times) => {
//   if (err) {
//     console.error(err);
//   }
//   if(!err) {
//     console.log(times);
//   }
// }
// const testCoords = { latitude: '41.47930b', longitude: '-87.31640' };

// fetchISSFlyOverTimes(testCoords, fetchFlyOverTimesCB);



/* fetchCoordsByIP test */
// const fetchCoordsCB = (err, data) => {
//   if (err) {
//       console.error(err);
//     }
//   if (!err) {
//     const { latitude, longitude } = data;
//     console.log(latitude, longitude);
//   }
// }

// fetchCoordsByIP('98.226.100.163', fetchCoordsCB);






/* fetchMyIP Test */
// const ipFetchCB = (err, ipAddress) => {
//   if (err) {
//     console.error(err);
//   }
//   if (!err) {
//     console.log(ipAddress.ip);
//   }
// }


// fetchMyIP(ipFetchCB);


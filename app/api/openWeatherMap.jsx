var axios = require('axios');

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
const OPEN_WEATHERMAP_APIKEY = '872fb837cdd3f70a58fab51fed3852a7';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHERMAP_URL}&APPID=${OPEN_WEATHERMAP_APIKEY}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
};

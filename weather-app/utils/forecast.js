const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const forecastURL = 'http://api.weatherstack.com/current?access_key=9984e823c7343dfebeef3f55da2db98a&query=' + latitude + ',' + longitude  + '&units=f';

    request({ url: forecastURL, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather services!', undefined);
        }
        else if(response.body.error){
            callback('Unable to find location', undefined);
        }
        else{
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
        }
    });
};

module.exports = forecast;
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const forecastURL = 'http://api.weatherstack.com/current?access_key=9984e823c7343dfebeef3f55da2db98a&query=' + latitude + ',' + longitude  + '&units=f';

    request({ url: forecastURL, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!', undefined);
        }
        else if(body.error){
            callback('Unable to find location', undefined);
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%');
        }
    });
};

module.exports = forecast;
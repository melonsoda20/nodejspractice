const request = require('request');

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibHVtaW51b3VzOTkwIiwiYSI6ImNrb3IxbXg0ZzB2NGEyd3BwMHowMWR1ZHUifQ.xxExrcGRz2hV_F7UkPyq0Q&limit=1';

    request({ url: geocodeURL, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined);
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Please try another search', undefined);
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
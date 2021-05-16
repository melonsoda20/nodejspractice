const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'Teddy',
        age: 24
    }, {
        name: 'Sarah',
        age: 19
    }]);
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'It is snowing',
        location: 'Philadelphia'
    }, {
        forecast: 'It is raining',
        location: 'Boston'
    }]);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

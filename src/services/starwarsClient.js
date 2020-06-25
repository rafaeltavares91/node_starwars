const axios = require('axios');

const starwarsClient = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

module.exports = starwarsClient;
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send({message: 'server working'})
});

module.exports = app;
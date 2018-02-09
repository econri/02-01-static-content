const express = require('express');
const path = require('path');
const app = express();

const clientFilePath = path.join(__dirname, 'client.html');

app.get('/', function(request, response) {
    response.sendFile(clientFilePath);
});

app.listen(3000, function () {
    console.log('Server is listening at http://localhost:3000');
});
const express = require('express');
const path = require('path');
const api = require('./routes');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use('api', api);

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public')));

app.listen(PORT, () =>
    console.log('Server Online!'));

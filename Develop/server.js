const path = require('path');
const express = require('express');
const routes = require('./controllers');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(routes);

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'public')));

app.listen(PORT, () =>
    console.log('Server Online!'));

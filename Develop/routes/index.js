const express = require ('express');

const apiRoutes = require('./api/notes');

const app = express();

app.use('/api/notes', apiRoutes);

module.exports = app;
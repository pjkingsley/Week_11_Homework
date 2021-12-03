const api = require('express').Router();
const { 
    readFromFile,
    readAndAppend,
    writeToFile, } = require('../../helpers/fsUtils.js');

const { v4: uuidv4 } = require('uuid');

api.get('/notes', (req, res) => {
    console.log('request recieved');
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data)));
});

api.post('/notes', (req, res) => {
    console.log('request recieved');
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
      const newNote = {  
        title,
        text,
        id: uuidv4(),
      };

      readAndAppend(newNote, './db/db.json');
      res.json('Note added');
    } else {res.error('Error in making note');
    };
});

api.delete('/notes/:id', (req, res) => {
    console.log('request recieved');
});

module.exports = api;
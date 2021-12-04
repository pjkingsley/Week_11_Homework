const router = require('express').Router();
const { 
    readFromFile,
    readAndAppend,
    writeToFile, } = require('../../helpers/fsUtils.js');

const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    console.log('Get request recieved');
    readFromFile('./db/db.json').then((data) => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data))});
});

router.post('/', (req, res) => {
    console.log('Post request recieved');
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

router.delete('/notes/:id', (req, res) => {
    console.log('request recieved');
});

module.exports = router;
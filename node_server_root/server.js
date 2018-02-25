// Imports
const express = require('express');
const path = require('path');

// Constants that are not imports
const app = express();
const dirname = path.resolve(path.resolve('../frontend'));


// console.log(dirname)

var router = express.Router();

// app.get('/', (req, res) => res.sendFile("/home/varun/Documents/Software/Hackathons/ProfHacks/profhacks-2018/frontend/html/main.html"));

app.get('/', (req, res) => res.sendFile(`${dirname}/index.html`));


app.listen(3000, () => console.log('Example app listening on port 3000!'));

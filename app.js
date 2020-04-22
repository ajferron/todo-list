const express = require("express");

const path = require("path");
const app = express();

const portNum = process.argv[2];

// app.use(express.static(path.join(__dirname+'/uploads')));

// Send HTML at root, do not change
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/build/index.html'));
});

// Send HTML at root, do not change
app.get('/About', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/build/index.html'));
});

app.get('/*.js', (req,res) => {
    res.sendFile(path.join(`${__dirname}/public/build/${req.url}`));
});

app.get('/*.css', (req,res) => {
    res.sendFile(path.join(`${__dirname}/public/build/${req.url}`));
});

app.get('/*.svg', (req,res) => {
    res.sendFile(path.join(`${__dirname}/public/build/${req.url}`));
});

app.get('/*.json', (req,res) => {
    res.sendFile(path.join(`${__dirname}/public/${req.url}`));
});

app.listen(portNum);
console.log('Running app at localhost: ' + portNum);


module.exports = app

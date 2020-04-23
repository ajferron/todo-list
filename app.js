const express = require("express");

const path = require("path");
const app = express();

const port = 8080;

const sendIndex = (req, res) => res.sendFile(path.join(`${__dirname}/public/build/index.html`));
const sendBuild = (req, res) => res.sendFile(path.join(`${__dirname}/public/build/${req.url}`));
const sendPublic = (req, res) => res.sendFile(path.join(`${__dirname}/public/${req.url}`));

app.get('/', sendIndex);
app.get('/About', sendIndex);

app.get('/static/media/*', sendBuild);
app.get('/*.js', sendBuild);
app.get('/*.css', sendBuild);
app.get('/*.svg', sendBuild);

app.get('/*.json', sendPublic);
app.get('/*.ico', sendPublic);

app.listen(port);

console.log(`Running app at localhost: ${port}`);


module.exports = app

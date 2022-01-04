
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

app.use('/', require('./routes/urls'));

var port = process.env.PORT || 8008;
app.listen(port);

console.log(`Server started on port ${port}`);

module.exports = app;


const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');

mongoose.Promise      = require('bluebird');

const routes            = require('./config/routes');

const { dbURI, port } = require('./config/environment');
mongoose.connect(dbURI);

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log(`Express has started on port: ${port}`));

const serverless = require('serverless-http');
const express = require('express');
const userRoutes = require('./routes');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use('/v1/users', userRoutes);

const handler = serverless(app);

module.exports.users = handler;


const serverless = require('serverless-http');
const express = require('express');
const userRoutes = require('./routes');
const bodyParser = require('body-parser');
const AWSXRay = require('aws-xray-sdk');


const app = express();
app.use(AWSXRay.express.openSegment('testUsersLambda'));
app.use(bodyParser.json());
app.use('/v1/users', userRoutes);
app.use(AWSXRay.express.closeSegment());
const handler = serverless(app);

module.exports.users = handler;


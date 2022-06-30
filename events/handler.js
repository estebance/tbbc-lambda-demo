const serverless = require('serverless-http');
const express = require('express');
const eventRoutes = require('./routes');
const bodyParser = require('body-parser');
const AWSXRay = require('aws-xray-sdk');


const app = express();
app.use(AWSXRay.express.openSegment('testEventsLambda'));
app.use(bodyParser.json());
app.use('/v1/events', eventRoutes);
app.use(AWSXRay.express.closeSegment());
const handler = serverless(app);

module.exports.events = handler;


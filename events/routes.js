let express = require('express');
let router = express.Router();
let AWSXRay = require('aws-xray-sdk-core');
let AWS = AWSXRay.captureAWS(require('aws-sdk'));

// middleware that is specific to this router
// define the home page route
router.get('/all', async (req, res) => {
  const s3 = new AWS.S3();
  s3.listBuckets((err, data) => {
    if (err) {
      console.log("Error", err);
      res.status(500).json({ msg: 'could not fetch the values' });
    } else {
      console.log("Success", data.Buckets);
      res.status(200).json({ msg: 'fetch all records' });
    }
  });
});
// define the about route
router.post('/create', function(req, res) {
  throw new Error("this is a very well designed error");
  res.status(200).json({ msg: 'user created' });
});

module.exports = router;

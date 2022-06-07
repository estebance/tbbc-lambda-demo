var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// define the home page route
router.get('/all', function(req, res) {
  console.log('this is an implementation');
  res.status(404).json({ msg: 'not found' });
});
// define the about route
router.post('/create', function(req, res) {
  res.status(200).json({ msg: 'user created' });
});

module.exports = router;

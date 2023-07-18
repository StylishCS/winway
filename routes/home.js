var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.send(req.user? req.user: "not logged in yet");

});

module.exports = router;

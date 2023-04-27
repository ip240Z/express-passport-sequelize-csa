var express = require('express');
const { authenticate } = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', authenticate, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

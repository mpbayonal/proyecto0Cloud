var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'app', temp:'n' });
});

router.get('/api/nuevo', function(req, res, next) {
  res.render('index', { title: 'hola', temp:'n' });
});

module.exports = router;

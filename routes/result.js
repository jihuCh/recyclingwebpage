var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var resultValue = req.query.resultValue
  res.render('result', {resultValue : resultValue});
});

module.exports = router;

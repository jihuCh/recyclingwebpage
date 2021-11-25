var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var resultValue = req.query.resultValue
  if(resultValue > 60) {
    res.render('result1', {resultValue : resultValue});
  } else if(resultValue >= 40 && resultValue <= 60) {
    res.render('result2', {resultValue : resultValue});
  } else if(resultValue < 40) {
    res.render('result3', {resultValue : resultValue});
  }
});

module.exports = router;

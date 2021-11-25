var express = require('express');
var router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;

//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('bank', { title: 'Search Results' });
//});

var express = require('express');
const bank_controlers= require('../controllers/bank');
var router = express.Router();
/* GET costumes */
router.get('/', bank_controlers.bank_view_all_Page );
module.exports = router;

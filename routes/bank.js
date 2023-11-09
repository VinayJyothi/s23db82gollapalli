//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('bank', { title: 'Search Results' });
//});

var express = require('express');
const bank_controllers= require('../controllers/bank');
var router = express.Router();
/* GET costumes */
router.get('/', bank_controllers.bank_view_all_Page );
router.get('/bank/:id', bank_controllers.bank_detail);

module.exports = router;
/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('bank', { title: 'Search Results' });
//});

var express = require('express');
const bank_controllers= require('../controllers/bank');
var router = express.Router();
/* GET bank */
router.get('/', bank_controllers.bank_view_all_Page );
//bank details
router.get('/bank/:id', bank_controllers.bank_detail);
/* GET detail costume page */
router.get('/detail', bank_controllers.bank_view_one_Page);
/* GET create bank page */
router.get('/create', bank_controllers.bank_create_Page);
/* GET create update page */
router.get('/update', bank_controllers.bank_update_Page);
/* Get delete bank page*/
router.get('/delete', bank_controllers.bank_delete_Page)
module.exports = router;

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('bank', { title: 'Search Results' });
//});

var express = require('express');
const bank_controllers= require('../controllers/bank');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET bank */
router.get('/', bank_controllers.bank_view_all_Page );
//bank details
router.get('/bank/:id', bank_controllers.bank_detail);
/* GET detail costume page */
router.get('/detail', bank_controllers.bank_view_one_Page);
/* GET create bank page */
router.get('/create',secured, bank_controllers.bank_create_Page);
/* GET create update page */
router.get('/update',secured, bank_controllers.bank_update_Page);
/* Get delete bank page*/
router.get('/delete',secured, bank_controllers.bank_delete_Page);

module.exports = router;

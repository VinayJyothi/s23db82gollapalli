var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bank_controller = require('../controllers/bank');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/bank', bank_controller.bank_create_post);
// DELETE request to delete Costume.
router.delete('/bank/:id', bank_controller.bank_delete);
// PUT request to update Costume.
router.put('/bank/:id', bank_controller.bank_update_put);
// GET request for one Costume.
router.get('/bank/:id', bank_controller.bank_detail);
// GET request for list of all Costume items.
router.get('/bank', bank_controller.bank_list);
/* GET detail bank page */
//router.get('/detail', bank_controllers.bank_view_one_Page);


module.exports = router;

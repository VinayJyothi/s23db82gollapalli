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

// Handle Costume update form on PUT.
exports.bank_update_put = async function(req, res) {
    console.log(`update on bank ${req.params.bank} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await bank.findById( req.params.bank)
    // Do updates of properties
    if(req.body.bank_name)
    toUpdate.bank_name = req.body.bank_name;
    if(req.body.account) toUpdate.account = req.body.account;
    if(req.body.balance) toUpdate.balance = req.body.balance;
    if(req.body.checkboxbalance) toUpdate.balance = true;
    else toUpdate.same = false;
    
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for bank ${req.params.bank}
    failed`);
    }
    };


module.exports = router;

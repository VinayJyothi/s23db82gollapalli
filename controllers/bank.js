var bank = require('../models/bank');
// List of all Costumes
exports.bank_list = function(req, res) {
res.send('NOT IMPLEMENTED: bank list');
};
// for a specific Costume.
exports.bank_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bank detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.bank_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: bank create POST');
};
// Handle Costume delete form on DELETE.
exports.bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bank delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.bank_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bank update PUT' + req.params.id);
};

// List of all Costumes
exports.bank_list = async function(req, res) {
try{
thebank = await bank.find();
res.send(thebank);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

/*var bank = require('../models/bank');
// List of all banks
exports.bank_list = function(req, res) {
res.send('NOT IMPLEMENTED: bank list');
};
// for a specific bank.
/*exports.bank_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bank detail: ' + req.params.id);
};*/
// Handle bank create on POST.
/*exports.bank_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: bank create POST');
};
// Handle bank delete form on DELETE.
exports.bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bank delete DELETE ' + req.params.id);
};
// Handle bank update form on PUT.
exports.bank_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bank update PUT' + req.params.id);
};

// for a specific bank.
exports.bank_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await bank.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// List of all banks
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

// VIEWS
// Handle a show all view
exports.bank_view_all_Page = async function(req, res) {
    try{
    thebank = await bank.find();
    res.render('bank', { title: 'bank Search Results', results: thebank });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    
// Handle bank create on POST.
exports.bank_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bank();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bank_type":"goat", "cost":12, "size":"large"}
    document.bank_name = req.body.bank_name;
    document.bank_account = req.body.account;
    document.bank_balance = req.body.balance;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // GET request for one bank.
//router.get('/bank/:id', bank_controllers.bank_detail);
*/

var bank = require('../models/bank');
 
// List of all flights
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
 
// VIEWS
// Handle a show all view
exports.bank_view_all_Page = async function(req, res) {
try{
thebank = await bank.find();
res.render('bank', { title: 'bank Search Results', results: thebank });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
 
// Handle flight create on POST.
exports.bank_create_post = async function(req, res) {
console.log(req.body)
let document = new bank();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"flight_type":"goat", "cost":12, "size":"large"}
document.bank_name = req.body.bank_name;
document.bank_account = req.body.account;
document.bank_balance = req.body.balance;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
 
// for a specific flight.
exports.bank_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await bank.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
 
exports.bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bank delete DELETE ' + req.params.id);
};
var bank = require('../models/bank');
// List of all banks
exports.bank_list = function(req, res) {
res.send('NOT IMPLEMENTED: bank list');
};
/* for a specific bank.
exports.bank_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bank detail: ' + req.params.id);
};*/
// Handle bank create on POST.
exports.bank_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: bank create POST');
};
/*// Handle bank delete form on DELETE.
exports.bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bank delete DELETE ' + req.params.id);
};*/
// Handle bank delete on DELETE.
exports.bank_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await bank.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bank_create_Page = function(req, res) {
console.log("create view")
try{
res.render('bankcreate', { title: 'bank Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
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
// Handle a show one view with id specified by query
exports.bank_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await bank.findById( req.query.id)
    res.render('bankdetail', { title: 'bank detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
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

    // GET request for one bank.
//router.get('/bank/:id', bank_controllers.bank_detail);

/*
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
};*/
const AccountModel = require("../models/accountModel");

const renderAccountsPage = (req, res)=>{  
   
        res.render("accountsPage", {accounts : req.locals}) ; // acc ima vrednost obj locals
   
}

module.exports = renderAccountsPage; 
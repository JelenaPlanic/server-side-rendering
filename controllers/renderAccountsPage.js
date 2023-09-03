const AccountModel = require("../models/accountModel");

const renderAccountsPage = (req, res)=>{  
   
        console.log(req.session);
        res.render("accountsPage", {accounts : req.locals, user: req.session.user}) ; // acc ima vrednost obj locals
   
}

module.exports = renderAccountsPage; 
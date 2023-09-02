const AccountModel = require("../models/accountModel");

const renderAccountDeletePage = (req, res)=>{

  res.render("deleteAccountsPage", {accounts : req.locals});
 
} ;

module.exports = renderAccountDeletePage
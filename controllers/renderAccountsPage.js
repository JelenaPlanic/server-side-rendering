const accounts = require("../data.json");

const renderAccountsPage = (req, res)=>{  // odgovorni za requeste, response 
    res.render("accountsPage", {accounts}); // po difoltu odlazi u views folder
}

module.exports = renderAccountsPage; 
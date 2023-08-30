const accounts = require("../data.json");

const renderAccountDeletePage = (req, res)=>{

    res.render("deleteAccountsPage", {accounts});

} ;

module.exports = renderAccountDeletePage
const accounts = require("../data.json");
const renderAccountEditPage = (req, res)=>{

    res.render("editAccountsPage", {accounts} );
}

module.exports = renderAccountEditPage;
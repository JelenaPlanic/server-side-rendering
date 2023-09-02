
const renderAccountEditPage = (req, res)=>{

    res.render("editAccountsPage", {accounts : req.locals} );
}

module.exports = renderAccountEditPage;

const renderAccountEditPage = (req, res)=>{

    res.render("editAccountsPage", {accounts : req.locals, user: req.session.user} );
}

module.exports = renderAccountEditPage;
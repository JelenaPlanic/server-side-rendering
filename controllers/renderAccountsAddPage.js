const renderAccountsAddPage = (req, res)=>{
    res.render("addAccountPage", {user: req.session.user});
}

module.exports = renderAccountsAddPage;
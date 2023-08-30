const accounts = require("../data.json");

const addAccount = (req, res)=>{
    console.log(req.body);
    const account = req.body;
    accounts.push(account);
    res.redirect("/accounts"); // redirektuj na novi route
}

module.exports = addAccount;
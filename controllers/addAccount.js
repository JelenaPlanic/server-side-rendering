const AccountModel = require("../models/accountModel");


const addAccount = async (req, res)=>{
   
    try {
        const {id, ...account} = req.body;
        console.log(account);
        let newAccount = new AccountModel(account); // AccountModel je klasa (priprema obj koji treba da se insertuje u bazu)

        let saved = await newAccount.save(); // obracam se bazi (promise)
        console.log(saved);

        res.redirect("/accounts");
        
    } catch (error) {
        
        // res.redirect("/error");
        console.log(error);
    }
}

module.exports = addAccount;
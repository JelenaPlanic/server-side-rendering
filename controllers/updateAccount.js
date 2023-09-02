const AccountModel = require("../models/accountModel");

const updateAccount = (req, res)=>{

    console.log(req.body); // sve sto se nalazi u name atributu, postaje key objecta body, a value inputa, vrednost tog kljuca!

    let {id, ...account} = req.body;
    console.log(id);
    console.log(account);

    // AccountModel.updateOne({_id : id}, {$set: account}) // 2 objecta
    // .then((result)=>{
    //     console.log(result);
    //     res.redirect("/accounts/edit");
    // })
    // .catch((error)=>{
    //     console.log(error);
    //     res.redirect("/error");
    // });

    AccountModel.findOneAndUpdate({_id : id}, {$set: account}, {new : true}) // vraca update Obj
    .then((result)=>{
        console.log(result);
        res.redirect("/accounts/edit");
    })
    .catch((error)=>{
        console.log(error);
        res.redirect("/error");
    });

 
};

module.exports = updateAccount;
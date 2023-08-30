const accounts = require("../data.json");
const updateAccount = (req, res)=>{
    console.log(req.body); // sve sto se nalazi u name atributu, postaje key objecta body, a value inputa, vrednost tog kljuca!

    let {id, ...account} = req.body;
    console.log(id);
    console.log(account);

    // accounts = accounts.map((acc)=>{
    
    //     if(acc.id === id)
    //     {
    //         return req.body
    //     }
    //     else 
    //     {
    //         return acc;
    //     }
    // })

    let foundedAccount = null;

    accounts.find((acc, index)=>{
        foundedAccount = index;
        return acc.id === id;
    })

    accounts[foundedAccount] = req.body;

    res.redirect("/accounts/edit");

}

module.exports = updateAccount;
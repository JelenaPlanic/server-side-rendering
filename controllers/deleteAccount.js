let accounts = require("../data.json");

const deleteAccount = (req, res)=>{
 let {id} = req.params;

 let founded = null;
 accounts.find((acc, index)=>{
    founded = index;
    return acc.id === id;
 })

 accounts.splice(founded, 1);


 res.redirect("/accounts/delete");
} ;

module.exports = deleteAccount
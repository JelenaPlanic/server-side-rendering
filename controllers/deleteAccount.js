const AccountModel = require("../models/accountModel");

const deleteAccount = (req, res)=>{
 
   let {id} = req.params;
   AccountModel.deleteOne({_id: id}).then((result)=>{
      console.log(result); // odgo od baze, count obrisanih, ako nema Id vraca 0
      res.redirect("/accounts/delete");

   }).catch((error)=>{
       console.log(error);
       res.redirect("/accounts/delete");
   
   })
//  let founded = null;
//  accounts.find((acc, index)=>{
//     founded = index;
//     return acc.id === id;
//  })

//  accounts.splice(founded, 1);

} 

module.exports = deleteAccount
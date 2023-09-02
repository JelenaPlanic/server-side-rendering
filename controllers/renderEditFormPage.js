const AccountModel = require("../models/accountModel");

const renderEditFormPage = (req, res)=>{

    let {id} = req.params;
    AccountModel.findOne({_id: id}).then((account)=>{
        res.render("editFormPage", {account});
    })
    .catch((error)=>{
        console.log(error);
        res.redirect("/error");
    })
    


    // let account = accounts.find((acc)=>{
    //     return acc.id === id;
    // })

    
} ;

module.exports = renderEditFormPage
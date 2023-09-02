const AccountsModel = require("../models/accountModel");

const getAllAcconts = (req, res, next)=>{

    AccountsModel.find({})
    .then((accounts)=>{ 
        // stignu podaci        
        req.locals = accounts; // prosledjivanje drugom middleware (ima isti takav request)
        next();
    
    })
    .catch((error)=>{
        console.log(error);
        res.redirect("/error");
    })
}

module.exports = getAllAcconts;
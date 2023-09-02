const AccountsModel = require("../models/accountModel");

const renderSearchResult = (req, res)=>{

    let {term} = req.query;
    AccountsModel.find({$or: [{fullName: term}, {card: term} ] }) // ako zelim po vise

    .then((accounts)=>{
        console.log(accounts);
    })
    .catch((error)=>{
        console.log(error);
    })

}

module.exports = renderSearchResult;
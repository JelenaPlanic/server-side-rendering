const UserModel = require("../models/userModel"); 
 
 const authVerify = async (req, res, next)=>{
 
    if(req.session.hasOwnProperty("user"))
    {
        let currentUser = req.session.user;
        let isExist = await UserModel.count({_id : currentUser._id });
        if(isExist === 1)
        {
            next();
        }
        else
        {
            res.redirect("/");
        }
        
    }
    else
    {
        res.redirect("/");
    }
 }

 module.exports = authVerify;
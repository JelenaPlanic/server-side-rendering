const UserModel = require("../models/userModel");

const login = (req, res)=>{
    let {email, password} = req.body;

    // trazimo User-a po email, email je unique, tako smo mi naveli.
    UserModel.findOne({email})
    .then((user)=>{ // ako ga nema u bazi, nece prijaviti gresku!
        
        console.log(user);

        if(user) // moram da proverim da li ga je pronasao! (null)
        {
            if(user.password === password)
            {
                req.session.user = user; // dodajem object user
                console.log("User logged!");
                res.redirect("/accounts");
            }
            else{
                console.log("Wrong email or password!");
                res.redirect("/");
            }           
        }
        else {
            console.log("User not exists!");
            res.redirect("/");
        }  

    })
    .catch((error)=>{
        console.log(error);
        res.redirect("/error");
    })

};

module.exports = login;

const logout = (req, res)=>{

    req.session.destroy(); // njegova metoda
    res.redirect("/");
}

module.exports = logout;
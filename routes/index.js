const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("home", {user: req.session.user});
})

router.use("/accounts", require("./account"));
router.use("/auth", require("./auth"));

module.exports = router;
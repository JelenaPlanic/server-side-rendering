const {Router} = require("express");
const getAllAcconts = require("../middlewares/getAllAccounts");
const authVerify = require("../middlewares/authVerify");
const router = Router();

// posto zelim da bude middleware pozvan pri svakom requestu:
router.use(authVerify);


//GET
router.get("/", getAllAcconts, require("../controllers/renderAccountsPage")); // dodat middleware
router.get("/add", require("../controllers/renderAccountsAddPage"));
router.get("/edit", getAllAcconts, require("../controllers/renderAccountEditPage"));
router.get("/delete", getAllAcconts,  require("../controllers/renderAccountDeletePage"));
router.get("/edit/:id", require("../controllers/renderEditFormPage"));
router.get("/delete/:id", require("../controllers/deleteAccount"));

router.get("/search", require("../controllers/renderSearchResult"));


//POST
router.post("/add", require("../controllers/addAccount"));
router.post("/update", require("../controllers/updateAccount"));



module.exports = router;
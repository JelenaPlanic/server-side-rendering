const mongoose = require("mongoose");

const AccountShema = new mongoose.Schema(
    {
        fullName : {type: String, required: true},
        deposit: {type:Number, default: 0},
        card : {type: String, required: true}
    });

    const AccountModel = mongoose.model("accounts",AccountShema );

    module.exports = AccountModel;
const {Schema,model } = require("mongoose"); // ne treba ceo mongoose

// sema i model sa kojim komuniciram sa bazom

const UserShema = new Schema({ // opisujem sta ce moj objekat da ima
    
    fullName : {type: String, required: true},
     email : {type: String, required: true}, 
     password : { type: String, required: true},
     createdAt : {type: Date, default: function() // za default value
    {
        return new Date().getTime();
    }}
});

const UserModel = model("users", UserShema);

module.exports = UserModel;
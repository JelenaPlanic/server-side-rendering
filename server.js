// konfiguracija mog servera:

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

//g0TgOhMuYlwP0rC2

const server = express();
const uri =  "mongodb+srv://jelena55:g0TgOhMuYlwP0rC2@cluster0.qvtuvrf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=>{
    console.log("MongoDb connected");
})



server.set("view engine", "ejs");  // postavka ejs kao view engine

server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({extended: true})); // forma
server.use(session(
    {
        name: "BankAppSession",
        resave : false,
        secret : "bankapp",
        saveUninitialized: false,
        cookie: {
            secure : false, // nemamo https (development)
            maxAge: 1000 * 60 * 60 * 6, // traje 6 h
            sameSite: true

        }
    }
));

server.use("/", require("./routes")); // po difoltu require trazi index.js

// server.use(express.json()); // vraca {} kod forme



server.listen(3000, ()=>{
    console.log("Server running on port: http://localhost:3000");
})
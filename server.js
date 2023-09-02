// konfiguracija mog servera:

const express = require("express");
const mongoose = require("mongoose");

const server = express();
const uri =  "mongodb://127.0.0.1:27017/bank_app";

mongoose.connect(uri).then(()=>{
    console.log("MongoDb connected");
})



server.set("view engine", "ejs");  // postavka ejs kao view engine

server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({extended: true})); // forma

server.use("/", require("./routes")); // po difoltu require trazi index.js

// server.use(express.json()); // vraca {} kod forme



server.listen(3000, ()=>{
    console.log("Server running on port: http://localhost:3000");
})
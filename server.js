// konfiguracija mog servera:

const express = require("express");
const server = express();

server.set("view engine", "ejs");  // postavka ejs kao view engine

server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({extended: true})); // forma

server.use("/", require("./routes")); // po difoltu require trazi index.js

// server.use(express.json()); // vraca {} kod forme



server.listen(3000, ()=>{
    console.log("Server running on port: http://localhost:3000");
})
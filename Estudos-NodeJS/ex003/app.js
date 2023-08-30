const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res){
    res.send("Página de Contato");    
})

app.get("/sobre", function(req, res){
    res.send("Sobre Mim");    
})

app.listen(8090);
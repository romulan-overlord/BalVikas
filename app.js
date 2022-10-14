const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signin.html");
});

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/home.html");
});

app.post("/home", function(req, res){
    console.log(req.body);
    res.sendFile(__dirname + "/home.html");
});

app.get("/signup", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function(req, res){
    console.log(req.body);
    res.redirect("/home");
});

app.listen(3030, function(err){
    console.log("server up!");
});
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signin.html");
});

app.get("/signup", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3030, function(err){
    console.log("server up!");
});
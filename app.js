const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signin.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    res.send("Your data has been received successfully.");
});

app.get("/signup", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function(req, res){
    console.log(req.body);
    res.send("Congratulations, new account made.");
});

app.listen(3030, function(err){
    console.log("server up!");
});
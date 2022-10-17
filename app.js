const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const entries = [
    {
        title: "Day 1",
        content: "I feel the sky bearing down on me"
    },
    {
        title: "Day 2",
        content: "Eternal Damnation"
    }
];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("signin");
});

app.get("/home", function(req, res){
    res.render("home", {entries: entries});
});

app.post("/home", function(req, res){
    console.log(req.body);
    res.render("home", {entries: entries});
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    console.log(req.body);
    res.redirect("/home");
});

app.get("/compose", function(req,res){
    res.render("compose");
});

app.listen(3000, function(err){
    console.log("server up!");
});
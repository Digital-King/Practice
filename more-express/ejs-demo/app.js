var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("homes");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing.toUpperCase()});
});

app.get("/posts", function(req, res){
    var post = [
        {title: "Post 1", author: "Suzy"},
        {title: "Post 2", author: "Bob"},
        {title: "Post 3", author: "Alex"}
        ];
        
    res.render("posts", {posts: post});
});

app.get("*", function(req, res){
    res.send("This route does not exist.");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
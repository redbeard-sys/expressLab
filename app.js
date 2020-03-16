const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP ,function(){
    console.log("express server is running");
});

app.get("/mercury", function(req, res){
   res.render("mercury.html");
});

app.get("/venus", function(req, res) {
    res.render("venus.html");
});

app.get("/earth", function(req, res) {
        res.render("earth.html");
});

app.get("/mars", function(req, res) {
        res.render("mars.html");
});

app.get("/jupiter", function(req, res) {
        res.render("jupiter.html");
});
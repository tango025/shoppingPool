var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var firebase = require("firebase");
app.use(express.static('views'));
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.render("landing");
});
// app.get("/login",(req,res)=>{
//     res.render("login");
// });
// app.get("/signin",(req, res) => {
//     res.render("signin");
//});
app.get("/:id",(req,res)=>{
    var id = req.params.id;
     res.render('temp', { seller: req.params.id });
})
app.listen(8080,()=> {
    console.log("listening");
})
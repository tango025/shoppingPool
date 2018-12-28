var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var firebase = require("firebase");
var config = require("./models/modelapp");
firebase.initializeApp(config);

app.use(express.static("static_files"));
app.use(express.static('views'));
app.set('view engine','ejs');
var seller;

//landing/login/signup

app.get("/",(req,res)=>{
    res.render("landing");
});

app.get('/favicon.ico', (req, res) => res.status(204));

// Main seller routes

app.get("/:id",(req,res)=>{
    var id = req.params.id;
    console.log(req.params.id);
    firebase.database().ref("sellers/sellers-list/"+id ).on('value',function(snap){
         seller = snap.val();
        seller.id = req.params.id;
    console.log(seller);    
    res.render('temp', { seller: seller });
})   
});

app.get("/:id/products", (req, res) => { 
    res.render("products", { seller: seller });
});

app.get("/:id/sales", (req, res) => {
    res.render("sales", { seller: seller });
 });

app.get("/:id/profile", (req, res) => {
    res.render("profile",{seller:seller});
});

app.get("/:id/logout",(req,res) => {
    res.render("logout");
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         //console.log(user.uid);
    //         window.location.href = user.uid;
    //     } else {
            
    //     }
    // });
    
    
});
// PORT NUMBER
app.listen(8080,()=> {
    console.log("listening");
})
//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = ["Eat","Code", "Sleep"];
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine", "ejs")

app.get('/',(req,res)=>{
    var today = new Date();
    var options = {
       weekday: "long",
       day: "numeric",
       month: "long"
    };
    var day = today.toLocaleString("en-US", options);
    res.render("list", {kindofDay: day, newListItems: items});    
})

app.post("/",(req,res)=>{
    var item = req.body.newItem;
    items.push(item); 
    res.redirect("/");
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Server is Running...");
})
const express = require("express");
const app = express();
const path = require('path')

function condition(req, res, next) {
var d = new Date();
const day = d.getDay();
const hour = d.getHours();
if (day >= 1 && day <= 5 && hour >= 0 && hour <= 17) {
    next();
} else {
    res.send("The web application is only available during working hours (Monday to Friday,  from 0 to 17).");
}
}

app.get('/', condition, (req, res) => {
res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.get('/contact', condition, (req, res) => {
res.sendFile(path.join(__dirname, 'Public', 'contactUs.html'));
});

app.get("/services", condition, (req, res) => {
res.sendFile(path.join(__dirname, 'Public', 'ourServices.html'));
});

app.listen(4000,(err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("The server is running !")
    }
})

// npm init -y
// npm i nodemon
const express = require('express');

// Server==> route->request from frontend-->response/file
// same as file system-->path->interact/type->file/path
//server init
const app = express();
//post ki chezein accept kr paye
app.use(express.json());

// app.get("/user",function(req,res){
//     console.log("Thank you for making a request on our server");
// });

// yeh frontend se req aayi hai iske response mein res.send() bhej do
app.get("/",function(req,res){
    console.log("hello from home page");
    res.send("<h1>Hello from Backend</h1>");
});

let obj = {
    name:"harsh",
}


//getting data from server
app.get("/user",function(req,res){
    console.log("users");
    // for sending ke val pairs to frontend
    res.json(obj);
});


//giving data to server
app.post("/user",function(req,res){
    console.log("req.data",req.body);
    // res.status(200).json(req.body);
    res.status(200).send("data received");
});

app.listen(8080,function(){
    console.log("server started");
})
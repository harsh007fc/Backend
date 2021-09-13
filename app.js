
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


let users = {

};
let obj = {
    name:"harshit",
    age:29
}


//create
app.post("/user",function(req,res){
    console.log("req.data",req.body);
    users = req.body;
    // res.status(200).json(req.body);
    res.status(200).send("data received and user added");
});

//getting data from server
//get/read
app.get("/user",function(req,res){
    console.log("users");
    // for sending ke val pairs to frontend
    res.json(users);
});


//giving data to server


//patch is update
app.patch("/user",function(req,res){
    let obj = req.body;
    for(let key in obj){
        users[key] = obj[key]
    }
    res.status(200).json(users);
});

//delete
app.delete("/user",function(req,res){
    users = {};
    res.status(200).json(users);
});


// multiple routes
//inko bolte hain template routes
app.get("/user/:id",function(req,res){
    console.log(req.params);
    res.status(200).send("Apka data");
})

app.listen(8080,function(){
    console.log("server started");
})
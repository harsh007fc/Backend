
// npm init -y
// npm i nodemon
const express = require('express');

// Server==> route->request from frontend-->response/file
// same as file system-->path->interact/type->file/path
//server init
const app = express();
//post ki chezein accept kr paye
app.use(express.json());

// post accept-> folder designate
app.use(express.static('public'))

let users = {

};
let obj = {
    name:"Aryan",
    age:29
}

let user = [];
//database hai user actual mein
function createUser(req,res){
    console.log("req.data",req.body);
    users = req.body;
    res.status(200).send("data received and user added");
}

function signUpUser(req,res){
    //email/username/pass bnao
    let {email,name,password} = req.body;
    console.log("USER",req.body);
    user.push({email,name,password});

    res.status(200).json({
        message:"user careated",
        createdUser:req.body,
    })
    
}
function loginUser(req,res){
    //email/pass check 
    //return res
}
function getUser(req,res){
    console.log("users");
    res.json(users);
}
function updateUser(req,res){
    let obj = req.body;
    for(let key in obj){
        users[key] = obj[key]
    }
    res.status(200).json(users);
}
function deleteUser(req,res){
    users = {};
    res.status(200).json(users);
}

//mounting in express
const UserRouter =  express.Router();
const AuthRouter =  express.Router();
app.use('/api/user',UserRouter);
app.use('/api/auth',AuthRouter);

UserRouter.route("/")
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

UserRouter.route("/:id").get(getUserById);


AuthRouter.post("/signup",setCreatedAt,signUpUser).post("/login",loginUser);

//middle ware hai yeh  
function setCreatedAt(req,res,next ){
    req.body.createdAt = new Date().toISOString();
    // return res.json({
    //     text:"Bye Bro",
    // })
    next();
}

function getUserById(req,res){
    console.log(req.params);
    res.status(200).send("Apka data");
}
app.get("/api/user/:id",getUserById) //////////////////

app.listen(8080,function(){
    console.log("server started");
})

// ====================REST API===================//
// 1=>no matter from where an API requested the result should be same
 //mtlb-> chahe ios,wind,android, se req maari ho result same hi hoga hmesha

//  2=>Routes should be on the basis of resources/nouns/entites
//  jaise flipkart ke routes filpkart/products/furniture/table/tb-21


// 3=>HTTP method should be used for doing operations on the resources
// getUsers=> app.get("/users")
// getUsers=> app.post("/users")
// getUsers=> app.patch("/users")
// getUsers=> app.delete("/users")


// 4=> ReST API always gives the result in JSON Format
// fact

// 5=> REST API ARE STATELESS
// FACT
// ========================================================
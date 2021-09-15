
// npm init -y
// npm i nodemon
const express = require('express');

// Server==> route->request from frontend-->response/file
// same as file system-->path->interact/type->file/path
//server init
const app = express();
//post ki chezein accept kr paye
app.use(express.json());


let users = {

};
let obj = {
    name:"harshit",
    age:29
}

//mounting in express
const router =  express.Router();
app.use('/api/user',router);

router.route("/")
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

router.route("/:id").get(getUserById);


function createUser(req,res){
    console.log("req.data",req.body);
    users = req.body;
    // res.status(200).json(req.body);
    res.status(200).send("data received and user added");
}



function getUser(req,res){
    console.log("users");
    // for sending ke val pairs to frontend
    res.json(users);
}
//getting data from server



//giving data to server

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

// yeh likhne ki zarurat nhi hai jav express.router("/route").get().post().etc(); likh diya toh
////////////////////////////////////////////
// // create                                  //
// app.post("/api/user",createUser);         //
// //get/read                                //
// app.get("/api/user",getUser);             //
// //patch is update                         //
// app.patch("/api/user",updateUser);        // 
// //delete                                  //
// app.delete("/api/user",deleteUser);       //
// /////////////////////////////////////////

// multiple routes
//inko bolte hain template routes
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
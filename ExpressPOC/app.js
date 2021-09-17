const express = require('express');
const path = require('path');
const app = express();
const users = require('./users')



//we dont do that here manually
// app.get("/",function(req,res){
//     // res.send("<h1>Hello from Backend</h1>");
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname,'Public','index.html'));
// });

//set static folder
app.use(express.static('public'));

//get all users



const logger = (req,res,next) => {
    console.log( new Date().toISOString());
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//init logger middleware
app.use(logger);

app.get('/api/users',(req,res)=> res.json(users));

app.get('/api/users/:id',(req,res)=>{
    let found = users.some(user=> user.id === parseInt(req.params.id));
    if(found){
        res.send(users.filter(user=>user.id === parseInt(req.params.id)));
        // res.send(req.params.id);

    }else{
        res.status(400).json({msg:"No member found with this id"})
    }
});

//set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
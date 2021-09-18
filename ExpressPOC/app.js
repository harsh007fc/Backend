const express = require('express');
const path = require('path');
const app = express();
const router = require('./Routes/Api/users')




//we dont do that here manually
// app.get("/",function(req,res){
//     // res.send("<h1>Hello from Backend</h1>");
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname,'Public','index.html'));
// });

//set static folder
app.use(express.static('public'));

//get all users

app.use('/api/users',router);


const logger = (req,res,next) => {
    console.log( new Date().toISOString());
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//init logger middleware
app.use(logger);


//set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
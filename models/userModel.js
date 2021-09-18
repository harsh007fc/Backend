//require kro
const mongoose = require('mongoose');
let {DB_LINK} = require('../../Food_App/Secret/Secret');

mongoose.connect(DB_LINK).then(function (db) {
    // console.log(db);
    console.log("Connected to Db")
}).catch(function (err) {
    console.log("err->", err);
})


const users = require('../../Users')
const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> res.json(users));

router.get('/:id',(req,res)=>{
    let found = users.some(user=> user.id === parseInt(req.params.id));
    if(found){
        res.send(users.filter(user=>user.id === parseInt(req.params.id)));
        // res.send(req.params.id);

    }else{
        res.status(400).json({msg:"No member found with this id"})
    }
});

module.exports = router;
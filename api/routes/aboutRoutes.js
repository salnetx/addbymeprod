const express = require('express');
const router  = express.Router();


router.get('/about',(req,res)=>{
    res.send(`privacy & policy`)
});

router.get('/privacy&policy',(req,res)=>{
    res.send(`privacy&policy`)
})

router.get('/t&c',(req,res)=>{
    res.send(`T&C`)
})

router.get('/help',(req,res)=>{
    res.send(`help`)
})

router.get('/developers',(req,res)=>{
    res.send(`developers`)
})

router.get('/ads',(req,res)=>{
    res.send(`ads`)
})

module.exports = router;
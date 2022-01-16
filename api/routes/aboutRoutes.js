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


router.get('/ads',(req,res)=>{
    res.send(`ads`)
})

router.get('/monetize',(req,res)=>{
    res.render(`publicViews/monetize`)
})

module.exports = router;
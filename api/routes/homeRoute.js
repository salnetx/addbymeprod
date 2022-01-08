const express = require('express');
const async = require('hbs/lib/async');
const User = require('../models/createProfile')
const router = express.Router();



router.post('/create', async(req,res)=>{
    
    const authUser = req.oidc.user;
    const user = new User({
        _id : authUser.sub,
        username : req.body.username,
        name : req.body.name,
        dob : req.body.dob,
        job : req.body.job,
        bio : req.body.bio,
        workplace : req.body.workplace

    })

    try{
      await user.save()
      res.redirect('/')
       
    }catch(err){
         res.send(`Sorry user name is taken`)
    }
})

router.get('/edit/profile', async(req,res)=>{
    try{
        const _authUser = req.oidc.user;
        const dbUser1 = await User.find({_id : _authUser.sub});
        res.render(`./user/editProfile`,{
            authUser : _authUser,
            username : dbUser1[0].username,
            name : dbUser1[0].name,
            dob : dbUser1[0].dob
        })
    }catch(err){
         res.redirect('/profile')
    }
})


router.post('/editprofile/:postid', async(req,res)=>{

       try{

         const updatedProfile = await User.updateMany({_id : req.params.postid},{$set: {
             username : req.body.username,
             name : req.body.name,
             dob : req.body.dob,
             job : req.body.job,
             bio : req.body.bio,
             workplace : req.body.workplace
         }})
         res.redirect('/profile')
       }catch(err){
           console.log(err)
       }
})

router.get('/profile', async(req,res)=>{
    try{
        const _authUser = await req.oidc.user;
        const dbUser1 = await User.find({_id : _authUser.sub});
        res.render(`./user/profile`,{
            username : dbUser1[0].username,
            name : dbUser1[0].name,
            dob : dbUser1[0].dob,
            job : dbUser1[0].job,
            workplace : dbUser1[0].workplace,
            bio : dbUser1[0].bio
        })
    }catch(err){
         res.redirect('/')
    }
})

router.get('/edit/posts', async(req,res)=>{
    try{
        const _authUser = await req.oidc.user;
        const dbUser1 = await User.find({_id : _authUser.sub});
        res.render(`./user/editposts`,{
            username : dbUser1[0].username,
            name : dbUser1[0].name,
            dob : dbUser1[0].dob
        })
    }catch(err){
         res.redirect('/')
    }
})


router.get('/explore', async(req,res)=>{
    try{
        const _authUser = await req.oidc.user;
        const dbUser1 = await User.find({_id : _authUser.sub});
        res.render(`./user/explore`,{
            username : dbUser1[0].username,
            name : dbUser1[0].name,
            dob : dbUser1[0].dob
        })
    }catch(err){
         res.redirect('/')
    }
})

router.get('/saved', async(req,res)=>{
    try{
        const _authUser = await req.oidc.user;
        const dbUser1 = await User.find({_id : _authUser.sub});
        res.render(`./user/savedlinks`,{
            username : dbUser1[0].username,
            name : dbUser1[0].name,
            dob : dbUser1[0].dob
        })
    }catch(err){
         res.redirect('/')
    }
})

router.get('/', async(req,res)=>{



    const isAuthenticated = req.oidc.isAuthenticated();
    if(isAuthenticated ){
        try{
            const _authUser = req.oidc.user;
            const dbUser1 = await User.find({_id : _authUser.sub});
            user = req.oidc.user,
            _user = JSON.stringify(user, null, 2),
            res.render(`./user/feed`,{
                username : dbUser1[0].username,
                name : dbUser1[0].name,
                dob : dbUser1[0].dob
            })
        }catch(err){
            res.render(`./user/createProfile.hbs`,{
                authUser : req.oidc.user
            });
        }
        
    }
    else{
        res.render('./publicViews/index.hbs',{
            title : "please log in",
        })
    }


})



router.get('/:username', async(req,res)=>{
     
    try{
        const dbUser = await User.find({username : req.params.username});
        res.render('./user/profileTheme/theme1',{
            username : dbUser[0].username,
            name : dbUser[0].name,
            dob : dbUser[0].dob,
            isAuthenticated : req.oidc.isAuthenticated()
        }) 
     }catch(err){
        res.render(`./publicViews/error`,{

        })
     }
});



module.exports = router;
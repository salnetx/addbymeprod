const mongoose = require('mongoose');


const socialLink = new mongoose.Schema({
    facebook : String,
    twitter : String,
    linkedin : String,
    instagram : String,
    github : String,
    youtube : String,
    snapchat : String,
    whatsapp : String,
    quora : String,
    pinterest : String,
    reddit : String,
    flickr : String,
    meetup : String,
    telegram : String,
    producthunt : String
});

const theme = new mongoose.Schema({
    bg : {
        require : false,
        type : String
    },
    txt : {
        require : false,
        type : String
    },
    btn : {
        require : false,
        type : String
    },
    spnsr : {
        require : false,
        type : Boolean
    },
    crdt : {
        require : false,
        type : Boolean
    }
})
const link = new mongoose.Schema({

})

const setting = new mongoose.Schema({

})

const post = new mongoose.Schema({

})
const userSchema = new mongoose.Schema({
    
    _id : {
      type : String,
    },
    username:{
        type : String,
        unique : true
    },

    name : {
       type : String
    },

    dob : {
       type : Date,
       default : new Date()
    },

    job : {
        type : String
    },

    workplace : {
       type : String
    },
    bio : {
        type : String
    },
    avatar : {
        type : String
    },
    sponsor : {
        type : String
    },
    setting : [setting],
    socialLink : [socialLink],
    theme : [theme], 
    link : [link]


})

module.exports = new mongoose.model('User',userSchema)
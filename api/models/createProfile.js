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
    txtclr : {
        require : false,
        type : String
    },
    btnclr : {
        require : false,
        type : String
    },
    sprtbtn : {
        require : false,
        type : Boolean
    },
    roundbtn : {
        require : false,
        type : Boolean
    },
    crdtbtn : {
        require : false,
        type : Boolean
    },
    cstmbg : {
        require : false,
        type : String
    },
    desc : {
        require : false,
        type : String
    },
    keywords : {
        require : false,
        type : String
    },
    fav : {
        require : false,
        type : String
    },
    title : {
        require : false,
        type : String
    },


})

module.exports = new mongoose.model('User',userSchema)
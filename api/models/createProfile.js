const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    
    _id : {
      required : true,
      type : String,
    },
    username:{
        required : true,
        type : String,
        unique : true
    },

    name : {
       required : true,
       type : String
    },

    dob : {
       required : true,
       type : Date,
       default : new Date()
    },

    job : {
        required : false,
        type : String
    },

    workplace : {
       required : false,
       type : String
    },
    bio : {
        required :false,
        type : String
    },
    avatar : {
        require : false,
        type : String
    }


})

module.exports = new mongoose.model('User',userSchema)
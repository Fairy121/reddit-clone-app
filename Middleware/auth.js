let express = require('express');
let passport = require('passport');
require('../passport.config');

function isAuth(req,res,next) {

     console.log(req.isAuthenticated());

    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status(500).json({success:false,message:'You must be logged in to access this content'});
    }
   
}

module.exports = isAuth;
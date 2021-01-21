const express = require('express');
const app = express();
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({credentials:true,origin:'http://localhost:3001'}));

require('dotenv').config()

app.use(express.static(path.join(__dirname,"reddit-clone","build")))



// Configure passport with User Auth
const User = require('./Models/user');
const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(User.authenticate()));

app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


// passport serialize

require('./passport.config');

app.use(passport.initialize()); 
app.use(passport.session()); 

// Connect to mongodb
require('./db');


let userRoute = require('./Routes/user');
let communityRoute = require('./Routes/community');
let communityMemberRoute = require('./Routes/communityMember');
let postRoute = require('./Routes/post');

app.use('/user',userRoute);
app.use('/community',communityRoute);
app.use('/communityMember',communityMemberRoute);
app.use('/post',postRoute);

app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname,"reddit-clone","build","index.html"))
})


app.listen(PORT,() => {
    console.log(`listening at ${PORT}`)
})
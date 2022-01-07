const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const createProfile = require('./api/models/createProfile');
var axios = require("axios").default;
const PORT = process.env.PORT || 3000;
const url = 'mongodb+srv://abmmngdb:Khankimagi420@cluster0.wyltp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


// Database
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open',()=>{
  console.log('connected...')
})

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())
// app.use(express.json())


// required express open id
const { auth } = require('express-openid-connect');

// express routes
const homeRouter = require('./api/routes/homeRoute');
const aboutRouter = require('./api/routes/aboutRoutes');


// all path dir
const viewsPath = (path.join(__dirname, './api/templates/views'));
const partialsPath = (path.join(__dirname, './api/templates/partials'));
const staticPath = path.join(__dirname,"./api/public")

// express static page
app.use('/static', express.static(staticPath))

// axios
app.use('/', aboutRouter);

// 

// auth config
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUEBASEURL
  };
  
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// registering view engnie
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// all routes
app.use('/',homeRouter);

app.listen(PORT,()=>{
    console.log(`The app is booming at port ${PORT}`)
});


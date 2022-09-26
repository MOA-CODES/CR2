const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'}) //configuring env path
const PORT = process.env.PORT||8080

//log requests
app.use(morgan('tiny'))

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))


//set view engine
app.set("view engine", "ejs") 
//specifying view engine can be ejs or html or pug
//app.set("views",path.resolve(__dirname,"views")) 

//load assests
app.use('/css', express.static(path.resolve(__dirname,"assests/css")));

//app.use('/css', express.static(path.resolve(__)))
app.use('/img', express.static(path.resolve(__dirname,"assests/img")));
app.use('/js', express.static(path.resolve(__dirname,"assests/js")));

//load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});
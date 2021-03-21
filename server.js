const express = require('express');
const https = require('https');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/dist/SALEM'))
app.get('/*',(req,res)=>res.sendFile(path.join(__dirname+'/dist/SALEM/index.html')))
//app.get('/',(req,res)=>res.)

//const server = https.createServer(app)

app.listen(port,()=> console.log("running"))

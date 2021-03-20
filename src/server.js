const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname+'/dist/SALEM'))
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/SALEM/index.html'))
})

var server = app.listen(process.env.PORT||8080,function(){
    var port = server.address().port()
})


const app = express();


app.use(express.static(__dirname+'/dist/SALEM'))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/SALEM/index.html'))
})

var server = app.listen(process.env.PORT||8080,function(){
    var port = server.address().port()
})

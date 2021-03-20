
const app = express();


app.use(express.static(__dirname+'/dist/salem'))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/salem/index.html'))
})

app.listen(process.env.PORT||8080)
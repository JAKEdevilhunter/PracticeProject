var express =require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static("assests"));

app.get("/",function(req,res){
	res.render("LandingPage");
});



app.listen(3000,function(){
	console.log("the ToDoList server is started");
});










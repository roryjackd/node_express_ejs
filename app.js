var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
      {name: "Salmon Creek", image: "https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      {name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/756780/pexels-photo-756780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  ]

  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => console.log("The Server has Started"))
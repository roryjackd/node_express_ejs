var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground")

mongoose.connect("mongodb://localhost/app_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP


// Campground.create(
//   { 
//     name: "Granite Hill", 
//     image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     description: "This is a huge granite hill."

//   }, 
//   function(err, campground){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND: ");
//       console.log(campground);
//     }
//   });


app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);  
    } else {
      res.render("index", {campgrounds:allCampgrounds});
    }
  });
});

//CREATE
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}

  Campground.create(newCampground, function(err, newlyCreated){
      if(err){
        console.log(err);
      } else {
        res.redirect("/campgrounds");
      }
    });
  });

//NEW - 
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      res.render("show", {campground: foundCampground});
    }
  });
})

app.listen(3000, () => console.log("The Server has Started"))








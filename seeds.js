var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest", 
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1350&q=80",
    description: "It's very cloudy"
  },  
  {
    name: "Desert Mesa", 
    image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1353&q=80",
    description: "It's very dry"
  },  
  {
    name: "Canyon Floor", 
    image: "https://images.unsplash.com/photo-1499363145340-41a1b6ed3630?ixlib=rb-0.3.5&s=e288f700a591363b6de6fefc12bcd183&auto=format&fit=crop&w=1350&q=80",
    description: "It's very deep"
  },  
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
      if(err){
        console.log(err);
      }
      console.log("removed campgrounds!");
      //add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err)
          } else {
            console.log("added a campground");
            //create a comment
            Comment.create(
            {
              text: "This place is great, but I wish there was internet",
              author: "Homer"
            }, function(err, comment){  
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
          }
        });
      });
    });
    
}

module.exports = seedDB;

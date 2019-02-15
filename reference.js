var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });


var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//     email: "troy@gmail.com",
//     name: "Troy"
// });

Post.create({
  title: "hot to cook the best apple .5",
  content: "aaaaaaaaaaaaaaaaaaaaaaaaaa "
}, function(err, post){
    User.findOne({email: "troy@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            })
        }
    })
});

//find user
//find the data with email then fill in the posts attribute with exec query
// User.findOne({email: "troy@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });
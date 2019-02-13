var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "troywu@browk.com",
    name: "Troy Wu"
});
newUser.posts.push({
    title: "How to bre adb potion",
    content: "go to class"
});

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });


// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "THEY ARE DELICIOUS"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(post);
//   }
// });

User.findOne({name: "Troy Wu"}, function(err, user){
   if(err){
    //   console.log(err);
   } else{
       user.posts.push({
           title: "3 Thing I really harte",
           content: "Voldemore * 3"
       });
       user.save(function(err, user){
           if(err){
               console.log(err);
           }else{
               console.log(user);
           }
       });
   }
});
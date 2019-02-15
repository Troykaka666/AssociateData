var mongoose = require("mongoose");

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        //its a mongoose object id belonging to a post
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});


//send out the model
module.exports = mongoose.model("User", userSchema);
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let PostSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
    },
    community_name:{
        type:String
    },
    community_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
   

},{timestamps:true})



module.exports = mongoose.model("Post",PostSchema);
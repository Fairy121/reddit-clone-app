let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let CommunityPostsSchema = new Schema({
    community_name:{
        type:String,
        required:true
    },
    community_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
   
    
    
},{timestamps:true})



module.exports = mongoose.model("CommunityPost",CommunityPostsSchema);
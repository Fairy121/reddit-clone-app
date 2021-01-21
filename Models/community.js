let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let CommunitySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        default:'public'
    },
    desc:{
        type:String,
    },
    
   
},{timestamps:true})



module.exports = mongoose.model("Community",CommunitySchema);
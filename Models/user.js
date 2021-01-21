let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    karma:{
        type:Number,
        default:0
    }

},{timestamps:true})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);
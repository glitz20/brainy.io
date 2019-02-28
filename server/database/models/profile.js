var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for profiles
var profile = new Schema({

    username: String,
    age: String,
    school: String,
    major: String,
    lookingfor: String,
    graduationdate: String,
    completed: [String],
    url:String

}, {
        collection: 'profiles'
    });

module.exports = mongoose.model('profile', profile);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var response = new Schema({

    answer: String,
    username: String,
    id: String,
    comment: String,
    unique: Number,
    relevance: Number,
    clarity: Number,
    date: String,
    response1: String,
    response2: String,
    response3: String,
    response4: String,
    response5: String,
    url:String
}, {
        collection: 'responses'
    });

module.exports = mongoose.model('response', response);

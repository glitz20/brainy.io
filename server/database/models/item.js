var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var item = new Schema({

    company: String,
    deadline: String,
    tag1: String,
    tag2: String,
    tag3: String,
    status: String,
    title: String,
    prize: String,
    introduction: String,
    question: String,
    survey1: String,
    survey2: String,
    survey3: String,
    survey4: String,
    survey5: String,
    image: String,
    completed: Number

}, {
        collection: 'items'
    });

module.exports = mongoose.model('item', item);

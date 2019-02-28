var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var form = new Schema({

    name: String,
    age: String,
    id: String,
    username: String,
    question1: String,
    question2: String,
    val1: String,
    val2: String




}, {
        collection: 'form'
    });

module.exports = mongoose.model('form', form);

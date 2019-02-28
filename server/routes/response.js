var express = require('express');
var app = express();
var responseRouter = express.Router();

// Require Response model in our routes module
var Response = require('../database/models/response');

// Defined store route
responseRouter.route('/add/response').post(function (req, res) {
    var response = new Response(req.body);
    response.save()
        .then(response => {
            res.status(200).json({ Response: 'Response added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


// Defined get data(index or listing) route

//Define get description route
responseRouter.route('/:id').get(function (req, res) {
    var id = req.params.id;
    //Response.find({ 'id':id}, function (err, response) {
    Response.find({ 'id': id}, function (err, response) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(response);
        }

    });

})


//get one specific response for commenting

responseRouter.route('/editcomment/:id').get(function (req, res) {
    var id = req.params.id;
    //Response.find({ 'id':id}, function (err, response) {
    Response.find({ '_id': id }, function (err, response) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(response);
        }

    });

})



responseRouter.route('/updatecomment/:id').post(function (req, res) {
    var id = req.params.id;
    Response.findOneAndUpdate({ '_id': id }, { $set: { 'comment': req.body.comment, 'unique': req.body.unique, 'relevance': req.body.relevance, 'clarity': req.body.clarity,  } }, { new: true }, function (err, prof) {

        if (err) {
            console.log("Something wrong when updating data!");
        }

        console.log(prof);
    });

});





module.exports = responseRouter;

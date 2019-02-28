var express = require('express');
var app = express();
var formRouter = express.Router();

// Require form model in our routes module
var Form = require('../database/models/form');

// Defined store route
formRouter.route('/add').post(function (req, res) {
    var form = new Form(req.body);
    form.save()
        .then(form => {
            res.status(200).json({ form: 'form added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


// Defined get data(index or listing) route

//Define get description route
formRouter.route('/:id').get(function (req, res) {
    var id = req.params.id;
    form.find({ 'id': id }, function (err, form) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(form);
        }

    });

})



module.exports = formRouter;

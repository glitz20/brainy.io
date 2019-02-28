var express = require('express');
var app = express();
var itemRouter = express.Router();

// Require Item model in our routes module
var Item = require('../database/models/item');

// Defined store route
itemRouter.route('/add/post').post(function (req, res) {
	var item = new Item(req.body);
	item.save()
        .then(item => {
        	res.json('Item added successfully' );
        })
        .catch(err => {
        	res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
itemRouter.route('/').get(function (req, res) {
	Item.find(function (err, itms) {
		if (err) {
			console.log(err);
		}
		else {
			res.json(itms);
		}
	})
});

// Defined edit route
itemRouter.route('/edit/:id').get(function (req, res) {
	var id = req.params.id;
	Item.findById(id, function (err, item) {
        res.json(item);
	});
});

//  Defined update route
itemRouter.route('/update/:id').post(function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        console.log(item.title)
		if (!item)
			return next(new Error('Could not load Document'));
		else {
            // do your updates here
            item.company = req.body.company;
            item.deadline = req.body.deadline;
            item.tag1 = req.body.tag1;
            item.tag2 = req.body.tag2;
            item.tag3 = req.body.tag3;
            item.status = req.body.status;
            item.title = req.body.title;
            item.prize = req.body.prize;
            item.introduction = req.body.introduction;
            item.question = req.body.question;
            item.survey1 = req.body.survey1;
            item.survey2 = req.body.survey2;
            item.survey3 = req.body.survey3;
            item.survey4 = req.body.survey4;
            item.survey5 = req.body.survey5;
            item.image = req.body.image;


			item.save().then(item => {
				res.json('Update complete');
			})
                .catch(err => {
                	res.status(400).send("unable to update the database");
                });
		}
	});
});

itemRouter.route('/updatecompleted/:id').post(function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        console.log(item.title)
        if (!item)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
           
            item.completed = req.body.completed;


            item.save().then(item => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
itemRouter.route('/delete/:id').get(function (req, res) {
	Item.findByIdAndRemove({ _id: req.params.id },
        function (err, item) {
        	if (err) res.json(err);
        	else res.json('Successfully removed');
        });
});

//Define get description route
itemRouter.route('/description/:id').get(function (req, res) {
	var id = req.params.id;
    Item.find({ '_id': id} , function (err, itms) {
		if (err) {
			console.log(err);
		}
		else {
			res.json(itms);
		}

	});

})

module.exports = itemRouter;
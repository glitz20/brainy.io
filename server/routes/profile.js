var express = require('express');
var app = express();
var profileRouter = express.Router();

// Require Response model in our routes module
var Profile = require('../database/models/profile');

// Defined store route



// Defined get data(index or listing) route

profileRouter.post('/', (req, res) => {
   

    var { username, age, school, major, lookingfor, graduationdate, completed,url } = req.body
    // ADD VALIDATION
          
            var newProfile = new Profile({
                username: username,
                age: age,
                school: school,
                major: major,
                lookingfor: lookingfor,
                graduationdate: graduationdate,
                completed: completed,
                url:url
            })


            newProfile.save((err, savedProfile) => {
                if (err) return res.json(err)
                res.json(savedProfile)
            })
        
    
})




//Define get description route
profileRouter.route('/:username').get(function (req, res) {
    var username = req.params.username;
    
    Profile.find({ 'username': username }, function (err, prof) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(prof);
            
        }

    });

});


profileRouter.route('/update/:username').post(function (req, res) {
    var username = req.params.username;
    Profile.findOneAndUpdate({ 'username': username }, { $set: { 'age': req.body.age, 'school': req.body.school, 'major': req.body.major, 'lookingfor': req.body.lookingfor, 'graduationdate': req.body.graduationdate } }, { new: true }, function (err, prof) {
        
        if (err) {
            console.log("Something wrong when updating data!");
        }
           
        console.log(prof);                    
    });

});

profileRouter.route('/updatecomplete/:username').post(function(req, res) {
    var username = req.params.username;
   
    Profile.findOneAndUpdate({ 'username': username }, { $push: { 'completed': req.body.completed } }, function(err, prof) {

        if (err) {
            console.log("Something wrong when updating data!");
        }

       
    });

});

profileRouter.route('/updateurl/:username').post(function (req, res) {
    var username = req.params.username;

    Profile.findOneAndUpdate({ 'username': username }, { $set: { 'url': req.body.url} }, function (err, prof) {

        if (err) {
            console.log("Something wrong when updating data!");
        }


    });

});



module.exports = profileRouter;

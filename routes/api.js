const express = require('express');
const router = express.Router();
const User = require('../models/users')


// get user from the db
router.get('/users', function(req, res, next){
    User.find({}).then(function(users) {
            res.send(users);
        }).catch(next);
});


// get user from the db
router.get('/users/:id', function(req, res, next){
    User.findById({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});


// add a new user to the db
router.post('/users', function(req, res, next){
    // create new instance of User and save in db by create()
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});


// update a user in the db
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        }).catch(next);
    });
});


// deleting user from the db
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});


module.exports = router;

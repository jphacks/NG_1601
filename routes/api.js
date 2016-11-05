var express = require('express');
var router = express.Router();
var Model = require('../model.js');
var loginCheck = require('./loginChecker.js');
// var mongodb = require('mongodb');
// var mongoose = require('mongoose');

router.get('/user', loginCheck, function(req,res){
  Model.find('user', req.params.query, function(data) {
    res.send(data);
  });
});
router.post('/user', function(req,res){});

router.get('/training', function(req,res){});

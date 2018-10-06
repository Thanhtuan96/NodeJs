var express = require('express');
var db = require('../db');
var shortid = require('shortid');
var controller = require('../controllers/user.controller');



var router = express.Router();
var users = db.get('users').value();

router.get('/', controller.index
);

router.get('/search',controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create',controller.postCreate);

module.exports = router;
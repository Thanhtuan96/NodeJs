var express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/',controller.index
);

router.get('/cookie', function(req,res,next){
    res.cookie('user-id',1234);
    res.send('hello');
});


router.get('/search',controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);
 
router.get('/delete/:id', controller.getDelete);


router.post('/create', validate.postCreate, controller.postCreate);

// router.get('/edit/:id', controller.edit);
// router.post('/edit/:id', controller.postEdit);

module.exports = router;
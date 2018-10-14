var md5 = require('md5');

var db = require('../db');

module.exports.login = function(req,res){
    res.render('login/index');
};

module.exports.postLogin = function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({email:email}).value();

    if(!user){
        res.render('login/index',{
            errors: [
                'User does not exist.'
            ],
            values: req.body    
        });
        return;
    }

    var hashedPassword = md5(password);


    if (user.password != hashedPassword){
        res.render('login/index', {
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id,{
        signed: true
    });
    res.redirect('/');
}
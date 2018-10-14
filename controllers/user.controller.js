var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req,res){
    res.render('users/index',{
        users: db.get('users').value()
    });
};

module.exports.search = function(req,res){
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q)!== -1;
    });
    res.render('users/index',{
        users: matchedUsers
    });
};

module.exports.create = function(req,res){
    console.log(req.cookies);
    res.render('users/create')
};

module.exports.get =  function(req,res){
    var id = req.params.id;
    var user = db.get('users').find({id :id}).value();
    res.render('users/view', {
        user: user
    });
};

module.exports.postCreate = function(req,res){
    console.log(req.body);
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
};

module.exports.getDelete = function(req,res){
    var id = req.path.split('/').splice(2).toString();
    var afterDelete = db.get('users').remove({id:id}).write();
    console.log(afterDelete);
     res.redirect('/users') 
};

// module.exports.edit = function(req,res){
//     var id = req.params.id;
//     var users = db.get('users').find({id:id}).value();

//     res.render('users/edit',{
//         user: users
//     });
// };


// module.exports.postEdit = function(req,res){
//     console.log(res.body);
//     var id = req.params.id;
//     var phone = req.body.phone;
//     var email = req.body.email;
    
//     db.get('users').push(res.body).write();
//     res.render('/users');
// };

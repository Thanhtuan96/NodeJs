var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./routes/user.route');



var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static('public'));
app.get('/',function(req, res){
    res.render('index',{
        name: 'AAA'
    });
});
app.get('/login', function(req,res){
    res.render('./login/index');
});

app.use('/users', userRouter);

app.listen(port, function(req,res){
    console.log('server listening on port'+ port);
});
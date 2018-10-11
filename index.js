var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middleware/auth.middleware');

var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static('public'));
app.use(cookieParser());


app.get('/',function(req, res){
    res.render('index',{
        name: 'AAA'
    });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.listen(port, function(req,res){
    console.log('server listening on port'+ port);
});
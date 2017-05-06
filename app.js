var express = require('express');
var app = express();
var routes = require('./routes');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var nunjucks = require('nunjucks');

// NUNJUCKS parameters
app.engine('html',nunjucks.render);
app.set('view engine','html');
nunjucks.configure('views',{noCache: true});


app.use(morgan('short'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(express.static('public'));
app.use('/',routes);

app.use(function(error,request,response,next){
  console.error("Error route hit");
  response.render('error');
});

app.listen(3000, function(request,response){
  console.log("Listening on port 3000");
});

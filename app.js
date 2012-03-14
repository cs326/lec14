var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
function home (req, res) {
    res.redirect('/lec14.html');
}

app.get('/', home);
app.get('/basics', routes.basics);
app.get('/manip', routes.manip);
app.get('/forms' , routes.forms );
app.get('/ajax'  , routes.ajax  );
app.get('/data/:data', routes.data);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

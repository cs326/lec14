exports.manip = function (req, res){
    res.render('manip', { title: 'jQuery Manipulation' });
};

exports.basics = function (req, res){
    res.render('basics', { title: 'jQuery Basics' });
};

exports.forms = function (req, res) {
    res.render('forms', { title: 'jQuery Forms' });
};

exports.ajax = function (req, res) {
    res.render('ajax', { title: 'jQuery AJAX' });
};

var data = {
    'mysql' : { name : 'MySQL',
                type : 'Relational' },
    'mongo' : { name : 'MongoDB',
                type : 'Document' },
    'couch' : { name : 'CouchDB',
                type : 'Document' },
    'postg' : { name : 'PostgreSQL',
                type : 'Relational' },
    'oracle': { name : 'Oracle',
                type : 'Relational' }
};

exports.data = function (req, res) {
    var d;
    if (req.params.data && (d = data[req.params.data])) {
        d.title  = 'Databases';
        d.layout =  false;
        res.render('data', d);
    } else {
        res.send('<p>No Data</p>');
    }
};
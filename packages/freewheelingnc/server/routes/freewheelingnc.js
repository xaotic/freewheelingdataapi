'use strict';

// The Package is past automatically as first parameter
module.exports = function(Freewheelingnc, app, auth, database) {

    app.get('/freewheelingnc/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/freewheelingnc/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/freewheelingnc/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/freewheelingnc/example/render', function(req, res, next) {
        Freewheelingnc.render('index', {
            package: 'freewheelingnc'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};

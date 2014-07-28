'use strict';

var bikeRoutes = require('../controllers/bikeroute');
// The Package is past automatically as first parameter
module.exports = function(Freewheelingnc, app, auth, database) {

    app.route('/bikeroutes')
        .get(bikeRoutes.all)
        .delete(bikeRoutes.destroy)
        .post(bikeRoutes.create);
};
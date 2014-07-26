'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    BikeRoute = mongoose.model('BikeRoute');

/**
 * List of Bike Routes
 */
exports.all = function(req, res) {
    BikeRoute.find().exec(function(err, bikeRoutes) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list the routes'
            });
        }
        res.json(bikeRoutes);

    });
};

exports.destroy = function(req, res) {
    var bikeRoute = req.bikeRoute;

    BikeRoute.remove(function(err) {
        if (err) {
            return res.json(500, {
                error: 'Cannot delete the bike route'
            });
        }
        res.json(bikeRoute);

    });
};
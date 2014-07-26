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
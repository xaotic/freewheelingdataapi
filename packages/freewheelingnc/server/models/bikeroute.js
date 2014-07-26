'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Route Schema
 */
var RouteSchema = new Schema({
    _id: {
        $oid: String
    },
    route: {
        coordinates: [{
            lat: Number,
            lng: Number
        }]
    },
    purpose: String,
    difficulty: Number,
    safety: Number
});

RouteSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('bikeRoute').exec(cb);
    }
};
mongoose.model('BikeRoute', RouteSchema);
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
    id: Number,
    route: {
        type: String,
        coordinates: [{
            lat: Number,
            lng: Number
        }]
    },
    purpose: String,
    difficulty: Number,
    safety: Number
});

RouteSchema.methods = {
    isEasyRoute : function(){
        return this.difficulty <= 5;
    }
};

mongoose.model('BikeRoute',RouteSchema);
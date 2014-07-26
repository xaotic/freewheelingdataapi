'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Freewheelingnc = new Module('freewheelingnc');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Freewheelingnc.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Freewheelingnc.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Freewheelingnc.menus.add({
        title: 'freewheelingnc example page',
        link: 'freewheelingnc example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Freewheelingnc.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Freewheelingnc.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Freewheelingnc.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Freewheelingnc;
});

'use strict';

// angular.module('mean.freewheelingnc').factory('Freewheelingnc', [
//     function() {
//         return {
//             name: 'freewheelingnc'
//         };
//     }
// ]);

angular.module('mean.freewheelingnc').factory('BikeRoutes', ['$resource',
    function($resource) {
        return $resource('bikeRoutes');
    }
]);
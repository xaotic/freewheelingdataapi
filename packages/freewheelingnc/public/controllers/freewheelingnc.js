'use strict';

angular.module('mean.freewheelingnc').controller('FreewheelingncController', ['$scope', 'Global', 'BikeRoutes',
    function($scope, Global, BikeRoutes) {
        $scope.global = Global;
        $scope.package = {
            name: 'freewheelingnc'
        };
        $scope.getAllRoutes = function() {
            BikeRoutes.query(function(bikeRoutes) {
                $scope.bikeRoutes = bikeRoutes;
            });
        };
    }
]);
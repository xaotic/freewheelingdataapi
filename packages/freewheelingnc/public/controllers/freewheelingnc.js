'use strict';

angular.module('mean.freewheelingnc').controller('FreewheelingncController', ['$scope', '$location', 'Global', 'BikeRoutes',
    function($scope, $location, Global, BikeRoutes) {
        $scope.global = Global;
        $scope.package = {
            name: 'freewheelingnc'
        };
        $scope.getAllRoutes = function() {
            BikeRoutes.query(function(bikeRoutes) {
                $scope.bikeRoutes = bikeRoutes;
            });
        };
        $scope.remove = function(bikeRoute) {
            console.log('attempting to delete ' + bikeRoute);
            if (bikeRoute) {
                bikeRoute.$remove();

                for (var i in $scope.bikeRoutes) {
                    if ($scope.bikeRoutes[i] === bikeRoute) {
                        $scope.bikeRoutes.splice(i, 1);
                    }
                }
            } else {
                $scope.bikeRoute.$remove(function(response) {
                    $location.path('bikeRoute');
                });
            }
        };
    }
]);
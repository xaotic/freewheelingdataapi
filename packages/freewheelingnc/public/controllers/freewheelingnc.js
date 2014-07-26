'use strict';

angular.module('mean.freewheelingnc').controller('FreewheelingncController', ['$scope', 'Global', 'Freewheelingnc',
    function($scope, Global, Freewheelingnc) {
        $scope.global = Global;
        $scope.package = {
            name: 'freewheelingnc'
        };
    }
]);

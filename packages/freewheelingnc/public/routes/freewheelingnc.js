'use strict';

angular.module('mean.freewheelingnc').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('show routes', {
            url: '/bikeroutes',
            templateUrl: 'freewheelingnc/views/bikeroutes.html'
        });
    }
]);
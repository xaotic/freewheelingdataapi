'use strict';

angular.module('mean.freewheelingnc').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('freewheelingnc example page', {
            url: '/freewheelingnc/example',
            templateUrl: 'freewheelingnc/views/index.html'
        });
    }
]);
